import { linkOrButton, media, notNested, seoFields } from '../__shared';

export default defineCmsCollection({
  dir: 'blog',
  group: 'pages',
  injectContext: {
    assign: 'blog1',
    page: 'blog1',
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
      }),
    };
    const model = collections.files(
      {
        label: 'Blog',
        files,
      },
    );
    return model;
  },
});
