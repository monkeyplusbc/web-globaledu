export default defineCmsCollection({
  dir: 'blogs',
  injectContext: {
    assign: 'blog',
    page: 'blogs/**',
  },
  group: 'posts',

  setup({ widgets, collections }) {
    const fields = {
      url: widgets.string({ label: 'Url seo' }),
      title: widgets.string({ label: 'Título' }),
      date: widgets.string({ label: 'Fecha' }),
      autor: widgets.string({ label: 'Autor' }),
      category: widgets.string({ label: 'Categoría' }),
      seo: widgets.object(
        {
          collapsed: true,
          label: 'Metadatos',
          fields: {
            title: widgets.string({ label: 'Título' }),
            description: widgets.string({ label: 'Descripción' }),
            keywords: widgets.string({ label: 'Palabras clave' }),
            imageSocial: widgets.image({
              label: 'Imagen para cuando se comparte en redes',
              media_folder: '/public/images/blogs/',
              public_folder: '/images/blogs/',
              hint: 'Medidas sugeridas: 1200px * 650px',
            }),
            google: widgets.boolean({ label: 'Metadatos para Google', required: false, default: true }),
            twitter: widgets.boolean({ label: 'Metadatos para Twitter', required: false, default: true }),
            facebook: widgets.boolean({ label: 'Metadatos para Facebook', required: false, default: true }),
          },
        },
      ),
      image: widgets.image({
        label: 'Imagen principal',
        media_folder: '/public/images/blogs/',
        hint: 'Medidas sugeridas: 904px * 550px',
        public_folder: '/images/blogs/',
      }),
    };
    const model = collections.folder(
      {
        label: 'Posts',
        create: true,
        identifier_field: 'title',
        slug: 'post{{year}}',
        editor: { preview: false },
        fields,
      },

    );
    return model;
  },
});
