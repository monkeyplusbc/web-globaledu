import { linkOrButton, media, notNested, seoFields } from '../__shared';

export default defineCmsCollection({
  dir: 'project1',
  group: 'pages',
  injectContext: {
    assign: 'project1',
    page: 'project1',
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
          description: widgets.markdown({ label: 'Descripción' }),
        },
      })
    };
    const model = collections.files(
      {
        label: 'Soluciones',
        files,
      },
    );
    return model;
  },
});
