import { createApp, reactive } from 'petite-vue';
import { email, ext, is_not, max, min, numeric, required, size } from '@monkeyplus/validates';
import { defineRule } from '@monkeyplus/validates/composable';
import type { StateForm } from '@monkeyplus/validates/form/v1';
import { createForm } from '@monkeyplus/validates/form/v1';

// Trae el lenguaje de la página
const LANG = document.documentElement.lang;

// Reglas globales
defineRule('none', () => true);
defineRule('email', email, ({ label }) => LANG === 'en' ? `${label} is not a valid email.` : `${label} no es un email válido.`);
defineRule('required', required, ({ label }) => LANG === 'en' ? `${label} is mandatory.` : `${label} es obligatorio.`);
defineRule('min', min, ({ label }, param) => LANG === 'en' ? `${label} must have minimum ${param} characters.` : `${label} debe tener mínimo ${param} caracteres.`);
defineRule('max', max, ({ label }, param) => LANG === 'en' ? `${label} must have maximum ${param} characters.` : `${label} debe tener máximo ${param} caracteres.`);
defineRule('is_not', is_not, ({ label }) => LANG === 'en' ? `Select a ${label}.` : `Selecciona un ${label}.`);
defineRule('numeric', numeric, ({ label }) => LANG === 'en' ? `${label} should only have numbers.` : `${label} solo debe tener números.`);
defineRule('size', size, ({ label }) => LANG === 'en' ? `${label} should not be more than 1 MB.` : `${label} no debe pesar más de 1 MB.`);
defineRule('ext', ext, ({ label }, param) => LANG === 'en' ? `${label} should be a ${param}.` : `${label} debe ser un ${param}.`);

async function convertToBase64(file: File | Blob) {
  const r: string = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as any);
    reader.onerror = (error) => reject(error);
  });
  return r.split(',')[1];
}

async function convertFilePathToBase64(filePath: RequestInfo | URL) {
  try {
    const response = await fetch(filePath);
    const blob = await response.blob();
    return await convertToBase64(blob);
  }
  catch (error) {
    console.error('Error fetching or converting file:', error);
    throw error;
  }
}

function createSingleForm() {
  const _state = reactive<StateForm>({
    initValues: {},
    values: { to: 'info@globaledug.com' },
    rules: {},
    errors: {},
  });

  const { Field, resetForm, validForm } = createForm(_state);

  function SendForm() {
    return {
      spinner: false,
      response: {
        error: false,
        text: '',
        active: false,
      },
      async handleFileChange(event: { target: { files: any[] } }) {
        const file = event.target.files[0];
        if (file) {
          try {
            const base64File = await convertToBase64(file);
            _state.values.cv_base64 = base64File; // Usamos una nueva propiedad para el base64
          }
          catch (error) {
            console.error('Error converting file to base64:', error);
            // Puedes mostrar un mensaje de error al usuario, si es necesario
          }
        }
      },

      // Cerrar dismiss
      closeDismiss() {
        this.response.active = false;
      },
      async sendForm() {
        const { valid } = validForm();
        this.spinner = true;

        grecaptcha.ready(() => {
          grecaptcha.execute('6LfjjVArAAAAAJYPuRhUOijiybb3hE5YHkNNU2aB', { action: 'submit' }).then(async (token: any) => {
            if (!valid) {
              this.response.active = true;
              this.response.error = true;
              this.spinner = false;
              this.response.text = LANG === 'en' ? 'Check that all the fields are complete' : 'Revisa que todos los campos estén completos.';
              return undefined;
            }

            const url = '/sendmail.ts';

            const formData = { ..._state.values };

            try {
              // Agregar el token de reCAPTCHA al formData
              formData.recaptcha_token = token;
              // Verificar si cv_base64 existe antes de agregarlo al formData
              if (_state.values.cv_base64)
                formData.cv = _state.values.cv_base64;

              if (_state.values.file)
                formData.file = await convertFilePathToBase64(_state.values.file);

              const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                  'Content-Type': 'application/json',
                },
              });

              if (!response.ok) {
                throw new Error('Error');
              }
              else {
                try {
                  if (gtag) {
                    switch (_state.values.form) {
                      case 'issue':
                        gtag('event', 'generate_issue', {});
                        break;
                      case 'suscribe':
                        gtag('event', 'generate_subscription', {});
                        break;
                      default:
                        gtag('event', 'generate_lead', {
                          event_id: _state.values.product,
                        });
                        break;
                    }
                  }
                }
                catch (error) {
                  console.warn('Error in gtag');
                }
                try {
                  if (fbq && _state.values.form === 'contact')
                    fbq('track', 'generate_lead');
                }
                catch (error) {
                  console.warn('Error in fbq');
                }
                this.response.active = true;
                this.response.error = false;
                this.spinner = false;
                switch (_state.values.form) {
                  case 'contact':
                    this.response.text = LANG === 'en' ? `${_state.values.name}, thank you for writing to us, we will contact you soon.` : `${_state.values.name}, gracias por dejarnos tus datos, pronto nos pondremos en contacto contigo.`;
                    break;
                  case 'issue':
                    this.response.text = LANG === 'en' ? `${_state.values.othername}, thank you for writing to us, we will contact you soon.` : `${_state.values.othername}, gracias por dejarnos tus datos, pronto nos pondremos en contacto contigo.`;
                    break;
                  case 'suscribe':
                    this.response.text = LANG === 'en' ? 'Thank you for subscribing to our content.' : 'Gracias por suscribirte a nuestro contenido.';
                    break;
                  default:
                    break;
                }
                resetForm();
              }
            }
            catch (error) {
              console.error('Error sending form:', error);
              this.response.active = true;
              this.response.error = true;
              this.spinner = false;
              this.response.text = LANG === 'en' ? 'Sorry there was an error, please try again.' : 'Lo sentimos hubo un error, vuelve a intentarlo.';
            }
          });
        }).catch((error: any) => {
          console.error('Error al ejecutar reCAPTCHA:', error);
        });
      },
    };
  }

  const app = createApp({
    Field,
    SendForm,
  });
  return app;
}

const form1 = createSingleForm();

setTimeout(() => {
  form1.mount('#contact-form');
}, 30);