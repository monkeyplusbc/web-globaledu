import { linkOrButton, media, notNested } from '../__shared';

export default defineCmsCollection({
  dir: 'common',
  group: 'settings',
  injectContext: {
    assign: 'common',
    page: '*',
  },
  setup({ widgets, collections }) {
    const model = collections.files(
      {
        label: 'Elementos comunes',
        files: {
          cookies: collections.file(
            {
              label: 'Cookies',
              fields: {
                title: widgets.string({ label: 'Título' }),
                txt: widgets.markdown({ label: 'Texto' }),
                custome: widgets.string({ label: 'Título para personalizar cookies' }),
                inputs: widgets.list({
                  label: 'Inputs para personalizar cookies',
                  fields: {
                    label: widgets.string({ label: 'Texto', required: true }),
                    value: widgets.string({ label: 'Valor', required: true, hint: 'Todo en minúsculas y sin espacios' }),
                  },
                }),
                btns: widgets.list({
                  label: 'Botones',
                  fields: {
                    txt: widgets.string({ label: 'Texto', required: true }),
                  },
                }),
              },
            },
          ),
          menu: collections.file(
            {
              label: 'Menú',
              fields: {
                title: widgets.string({ label: 'Título', required: true }),
                items: widgets.list({
                  label: 'Lista del menú',
                  fields: {
                    txt: widgets.string({ label: 'Texto del botón', required: true }),
                    link: widgets.object({
                      label: 'Enlace',
                      fields: linkOrButton(widgets),
                    }),
                  },
                  extraOptions: {
                    ...notNested,
                  },
                }),
                languajes: widgets.list({
                  label: 'Lista de idiomas',
                  fields: {
                    txt: widgets.string({ label: 'Texto', required: true }),
                    link: widgets.object({
                      label: 'Enlace',
                      fields: linkOrButton(widgets),
                    }),
                  },
                  extraOptions: {
                    ...notNested,
                  },
                }),
              },
            },
          ),
          logos: collections.file(
            {
              label: 'Logos',
              fields: {
                logoDark: widgets.image({ label: 'Logotipo para fondos claros', required: true, ...media.images, hint: 'Medidas: 134*26px' }),
              },
            },
          ),
          networks: collections.file(
            {
              label: 'Redes sociales',
              fields: {
                items: widgets.list({
                  label: 'Listado de redes',
                  fields: {
                    icon: widgets.string({ label: 'Clase de ícono', required: true, hint: 'Consultar en le siguiente enlace clases de otros íconos: https://icon-sets.iconify.design/' }),
                    link: widgets.object({
                      label: 'Enlace',
                      fields: linkOrButton(widgets),
                    }),
                  },
                  extraOptions: {
                    ...notNested,
                  },
                }),
              },
            },
          ),
          footer: collections.file(
            {
              label: 'Footer',
              fields: {
                cta: widgets.object({
                  label: 'Banner cta',
                  fields: {
                    txt: widgets.markdown({ label: 'Texto', required: true }),
                    btn: widgets.object({
                      label: 'Texto',
                      fields: {
                        txt: widgets.string({ label: 'Texto' }),
                        link: widgets.object({
                          label: 'Enlace',
                          fields: linkOrButton(widgets),
                        }),
                      },
                      extraOptions: {
                        ...notNested,
                      },
                    }),
                  },
                }),
                copyrigth: widgets.string({ label: 'Copyright', required: true }),
                suscribe: widgets.object({
                  label: 'Suscripción',
                  fields: {
                    title: widgets.string({ label: 'Títilo', required: true }),
                    txt: widgets.string({ label: 'Texto', required: true }),
                    form: widgets.object({
                      label: 'Formulario',
                      fields: {
                        inputs: widgets.list({
                          label: 'Campos',
                          fields: {
                            label: widgets.string({ label: 'Título del campo', required: true }),
                            error: widgets.string({ label: 'Texto para error del campo', required: true }),
                          },
                        }),
                        btn: widgets.string({ label: 'Texto del botón', required: true }),
                      },
                    }),
                  },
                }),
              },
            },
          ),
          general: collections.file(
            {
              label: 'Generales',
              fields: {
                title: widgets.string({ label: 'Texto del botón', required: true }),
              },
            },
          ),
        },
      },
    );
    return model;
  },
});
