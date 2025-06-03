import { linkOrButton, media, notNested, seoFields } from '../__shared';

export default defineCmsCollection({
  dir: 'contact1',
  group: 'pages',
  injectContext: {
    assign: 'contact1',
    page: 'contact1',
  },
  setup({ widgets, collections }) {
    const files = {
      seo: collections.file({
        label: 'Metadatos',
        fields: seoFields(widgets),
      }),
      banner: collections.file({
        label: 'Banner',
        fields: {
          active: widgets.boolean({ label: 'Activar', default: true }),
          title: widgets.string({ label: 'Título' }),
        },
      }),
      info: collections.file({
        label: 'Informacion',
        fields: {
          active: widgets.boolean({ label: 'Activar', default: true }),
          mapIframeSrc: widgets.string({ label: 'Link iframe mapa' }),
          contactDetails: widgets.list({
            label: 'Detalles de contacto',
            fields: {
              icon: widgets.string({ label: 'Ícono', hint: 'Buscar más íconos aquí: https://icon-sets.iconify.design/' }),
              title: widgets.string({ label: 'Título' }),
              details: widgets.string({ label: 'Detalles' }),
            },
          }),
          title: widgets.string({ label: 'Título' }),
          txt: widgets.markdown({ label: 'Texto' }),
        },
      }),
      join: collections.file({
        label: 'Datos',
        fields: {
          active: widgets.boolean({ label: 'Activar', default: true }),
          title: widgets.string({ label: 'Título' }),
          counters: widgets.list({
            label: 'Numeros',
            fields: {
              value: widgets.string({ label: 'Numero' }),
              label: widgets.string({ label: 'Texto' }),
            },
          }),
        },
      }),
    };
    const model = collections.files(
      {
        label: 'Contacto',
        files,
      },
    );
    return model;
  },
});
