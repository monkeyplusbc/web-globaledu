import { media, seoFields } from '../__shared';
export default defineCmsCollection({
  dir: 'projects',
  group: 'pages',
  injectContext: {
    assign: 'projects',
    page: 'projects/**',
  },
  setup({ widgets, collections }) {
    const fields = {
      url: widgets.string({ label: 'Url seo' }),
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
              media_folder: '/public/images/shared/',
              public_folder: '/images/shared/',
            }),
            google: widgets.boolean({ label: 'Metadatos para Google', required: false, default: true }),
            twitter: widgets.boolean({ label: 'Metadatos para Twitter', required: false, default: true }),
            facebook: widgets.boolean({ label: 'Metadatos para Facebook', required: false, default: true }),
          },
        },
      ),
      infoClient: widgets.boolean({ label: 'Informacion de cliente', default: true }),
      linkProject: widgets.string({ label: 'Link de proyecto' }),
      category: widgets.string({ label: 'Categoria' }),
      date: widgets.string({ label: 'Fecha' }),
      client: widgets.string({ label: 'Cliente' }),
      title: widgets.string({ label: 'Titulo' }),
      image: widgets.image({
        label: 'Imagen principal',
        media_folder: '/public/images/projects/',
        hint: 'Medidas sugeridas: 960px * 600px',
        public_folder: '/images/projects/',
      }),
      gallery: widgets.list({
        label: 'Galeria',
        fields: {
          img: widgets.image({ label: 'Imagen', required: true, ...media.projects, hint: 'Medidas: 900px*800px.' }),
        },
      }),
      about: widgets.list({
        label: 'Informacion',
        collapsed: true,
        fields: {
          content: widgets.markdown({ label: 'Informacion' }),
        },
      }),
    };
    const model = collections.folder(
      {
        label: 'Detalles de soluciones',
        create: true,
        identifier_field: 'url',
        slug: '{{year}}-{{month}}-{{day}}-{{url}}',
        editor: { preview: false },
        fields,
      },
    );

    return model;
  },
});