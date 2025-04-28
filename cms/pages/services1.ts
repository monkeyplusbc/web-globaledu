import { linkOrButton, media, notNested, seoFields } from '../__shared';

export default defineCmsCollection({
  dir: 'services1',
  group: 'pages',
  injectContext: {
    assign: 'services1',
    page: 'services1',
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
      about: collections.file({
        label: 'about',
        fields: {
          active: widgets.boolean({ label: 'Activar' }),
          title: widgets.string({ label: 'Título' }),
        },
      }),
      video: collections.file({
        label: 'video',
        fields: {
          active: widgets.boolean({ label: 'Activar' }),
          title: widgets.string({ label: 'Título' }),
        },
      }),
      talk: collections.file({
        label: 'talk',
        fields: {
          active: widgets.boolean({ label: 'Activar' }),
          title: widgets.string({ label: 'Título' }),
        },
      })
    };
    const model = collections.files(
      {
        label: 'Services',
        files,
      },
    );
    return model;
  },
});
