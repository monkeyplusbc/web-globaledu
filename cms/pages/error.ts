import { seoFields } from '../__shared';

export default defineCmsCollection({
  dir: 'error',
  group: 'pages',
  injectContext: {
    assign: 'error',
    page: 'notFound',
  },
  setup({ widgets, collections }) {
    const files = {
      seo: collections.file({
        label: 'Metadatos',
        fields: seoFields(widgets),
      }),
    };
    const model = collections.files(
      {
        label: 'Error 404',
        files,
      },
    );
    return model;
  },
});
