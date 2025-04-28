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

async function convertToBase64(file: File) {
  const r: string = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as any);
    reader.onerror = (error) => reject(error);
  });
  return r.split(',')[1];
}

function createSingleForm() {
  const _state = reactive<StateForm>({
    initValues: {},
    values: {},
    rules: {},
    errors: {},
  });

  const { Field, resetForm, validForm } = createForm(_state);

  function SendForm() {
    return {
      spinner: false,
      response: {
        active: false,
        containerClases: '',
        insideClases: '',
        text: '',
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
      async sendForm() {
        const { valid } = validForm();
        if (!valid)
          return undefined;

        this.spinner = true;

        const url = 'https://n8n-redirects.netlify.app/sendinformation.ts';

        const formData = { ..._state.values };

        try {
          // Verificar si cv_base64 existe antes de agregarlo al formData
          if (_state.values.cv_base64)
            formData.cv = _state.values.cv_base64;

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
              if (gtag)
                gtag('event', `generate_${_state.values.form}`, {});
            }
            catch (error) {
              console.warn('Error in gtag');
            }
            this.response.active = true;
            this.spinner = false;
            this.response.containerClases = 'dark:text-green-400 bg-green-100 text-green-800';
            this.response.insideClases = 'bg-green-50 text-green-500 focus:ring-green-400 tw-p-1.5 hover:bg-green-200 dark:text-green-400';
            if (_state.values.form === 'suggestions')
              this.response.text = LANG === 'en' ? 'Thank you for leaving us your suggestion, we will take it into account to improve.' : 'Gracias por dejarnos tu sugerencia, la tendremos en cuenta para mejorar.';
            else
              this.response.text = LANG === 'en' ? 'Thank you for writing to us, we will contact you soon.' : 'Gracias por escribirnos, pronto nos pondremos en contacto.';

            resetForm();
          }
        }
        catch (error) {
          console.error('Error sending form:', error);
          this.response.active = true;
          this.spinner = false;
          this.response.containerClases = 'dark:text-red-400 bg-red-100 text-white';
          this.response.insideClases = 'bg-red-50 text-red-500 focus:ring-red-400 tw-p-1.5 hover:bg-red-200 dark:text-red-400';
          this.response.text = LANG === 'en' ? 'Sorry there was an error, please try again.' : 'Lo sentimos hubo un error, vuelve a intentarlo.';
        }
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
  form1.mount('#subscribe-form');
  if (document.getElementById('contact-form')) {
    const form2 = createSingleForm();
    form2.mount('#contact-form');
  }
  if (document.getElementById('the-talent')) {
    const form3 = createSingleForm();
    form3.mount('#the-talent');
  }
  if (document.getElementById('the-suggestions')) {
    const form4 = createSingleForm();
    form4.mount('#the-suggestions');
  }
}, 30);
