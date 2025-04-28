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
          active: widgets.boolean({ label: 'Activar' }),
          title: widgets.string({ label: 'Título' }),
        },
      }),
      info: collections.file({
        label: 'Info',
        fields: {
          active: widgets.boolean({ label: 'Activar' }),
          title: widgets.string({ label: 'Título' }),
        },
      }),
      join: collections.file({
        label: 'join',
        fields: {
          active: widgets.boolean({ label: 'Activar' }),
          title: widgets.string({ label: 'Título' }),
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
