import { linkOrButton, media, notNested, seoFields } from '../__shared';

export default defineCmsCollection({
  dir: 'home1',
  group: 'pages',
  injectContext: {
    assign: 'home1',
    page: 'home1',
  },
  setup({ widgets, collections }) {
    const files = {
      seo: collections.file({
        label: 'Metadatos',
        fields: seoFields(widgets),
      }),
      heroPrimary: collections.file({
        label: 'Banner Principal',
        fields: {
          active: widgets.boolean({ label: 'Activar' }),
          image: widgets.image({ label: 'Imagen', required: true, ...media.home, hint: 'Medidas: 800*538px' }),
          title: widgets.string({ label: 'Título' }),
          txt: widgets.markdown({ label: 'Texto' }),
          btn: widgets.object({
            label: 'Boton',
            fields: {
              txt: widgets.string({ label: 'Texto Enlace' }),
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
      features: collections.file({
        label: 'Conoce las unidades especializadas',
        fields: {
          active: widgets.boolean({ label: 'Activar', default: true }),
          pretitle: widgets.string({ label: 'Pretítulo' }),
          title: widgets.string({ label: 'Título' }),
          items: widgets.list({
            label: 'Lista',
            fields: {
              image: widgets.image({ label: 'Imagen', required: true, ...media.icons, hint: 'Medidas: 52*52px. Es importante que la imágen sea en formato svg.' }),
              title: widgets.string({ label: 'Título' }),
              txt: widgets.markdown({ label: 'Texto' }),
              btn: widgets.object({
                label: 'Boton',
                fields: {
                  txt: widgets.string({ label: 'Texto Enlace' }),
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
        },
      }),
      heroSecundary: collections.file({
        label: 'Hero Secundary',
        fields: {
          active: widgets.boolean({ label: 'Activar', default: true  }),
          image: widgets.image({ label: 'Imagen', required: true, ...media.home, hint: 'Medidas: 800*545px' }),
          pretitle: widgets.string({ label: 'Pretítulo' }),
          title: widgets.string({ label: 'Título' }),
          txt: widgets.markdown({ label: 'Texto' }),
          btn: widgets.object({
            label: 'Boton',
            fields: {
              txt: widgets.string({ label: 'Texto Enlace' }),
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
      steps: collections.file({
        label: '¿Qué nos hace diferentes?',
        fields: {
          active: widgets.boolean({ label: 'Activar', default: true }),
          pretitle: widgets.string({ label: 'Pretítulo' }),
          title: widgets.string({ label: 'Título' }),
          txt: widgets.markdown({ label: 'Texto' }),
          items: widgets.list({
            label: 'Lista de pasos',
            fields: {
              title: widgets.string({ label: 'Título' }),
              txt: widgets.markdown({ label: 'Texto' }),
            },
          }),
        },
      }),
      heroChecks: collections.file({
        label: 'Metodología con sentido',
        fields: {
          active: widgets.boolean({ label: 'Activar', default: true }),
          image: widgets.image({ label: 'Imagen', required: true, ...media.home, hint: 'Medidas: 800*560px' }),
          title: widgets.string({ label: 'Título' }),
          txt: widgets.markdown({ label: 'Texto' }),
          btn: widgets.object({
            label: 'Boton',
            fields: {
              txt: widgets.string({ label: 'Texto Enlace' }),
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
      heroCards: collections.file({
        label: 'Aprender',
        fields: {
          active: widgets.boolean({ label: 'Activar', default: true }),
          items: widgets.list({
            label: 'Elementos',
            fields: {
              txt: widgets.markdown({ label: 'Texto' }),
              title: widgets.string({ label: 'Título' }),
              subtitle: widgets.string({ label: 'Subtítulo' }),
            },
          }),
          pretitle: widgets.string({ label: 'Pretítulo' }),
          title: widgets.string({ label: 'Título' }),
          txt: widgets.markdown({ label: 'Texto' }),
          btn: widgets.object({
            label: 'Boton',
            fields: {
              txt: widgets.string({ label: 'Texto Enlace' }),
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
      heroExpansors: collections.file({
        label: 'FAQ',
        fields: {
          active: widgets.boolean({ label: 'Activar', default: true }),
          image: widgets.image({ label: 'Imagen', required: true, ...media.home, hint: 'Medidas: 800*499px' }),
          pretitle: widgets.string({ label: 'Pretítulo' }),
          title: widgets.string({ label: 'Título' }),
          items: widgets.list({
            label: 'Preguntas',
            fields: {
              title: widgets.string({ label: 'Título' }),
              txt: widgets.markdown({ label: 'Texto' }),
            },
          }),
        },
      }),
      team: collections.file({
        label: 'Testimonios',
        fields: {
          active: widgets.boolean({ label: 'Activar', default: true }),
          pretitle: widgets.string({ label: 'Pretítulo' }),
          title: widgets.string({ label: 'Título' }),
          items: widgets.list({
            label: 'Equipo',
            fields: {
              image: widgets.image({ label: 'Imagen', required: true, ...media.avatars, hint: 'Medidas: 100*100px' }),
              title: widgets.string({ label: 'Título' }),
              subtitle: widgets.string({ label: 'Subtítulo' }),
              txt: widgets.markdown({ label: 'Texto' }),
              networks: widgets.object({
                label: 'Redes Sociales',
                fields: {
                  active: widgets.boolean({ label: 'Activar', default: true }),
                  items: widgets.list({
                    label: 'Red social',
                    fields: {
                      icon: widgets.string({ label: 'Ícono', hint: 'Buscar más íconos aquí: https://icon-sets.iconify.design/' }),
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
            },
          }),
        },
      }),
      pricing: collections.file({
        label: 'Pricing',
        fields: {
          active: widgets.boolean({ label: 'Activar', default: true }),
          settings: widgets.object({
            label: 'Configuraciones',
            fields: {
              month: widgets.string({ label: 'Texto para mensualidad' }),
              year: widgets.string({ label: 'Texto para anualidad' }),
              save: widgets.string({ label: 'Texto para ahorro' }),
            },
          }),
          pretitle: widgets.string({ label: 'Pretítulo' }),
          title: widgets.string({ label: 'Título' }),
          txt: widgets.markdown({ label: 'Texto' }),
          btn: widgets.object({
            label: 'Boton',
            fields: {
              txt: widgets.string({ label: 'Texto Enlace' }),
              link: widgets.object({
                label: 'Enlace',
                fields: linkOrButton(widgets),
              }),
            },
            extraOptions: {
              ...notNested,
            },
          }),
          items: widgets.list({
            label: 'Lista de precios',
            fields: {
              monthPrice: widgets.string({ label: 'Precio mensual' }),
              yearPrice: widgets.string({ label: 'Precio anual' }),
              plan: widgets.string({ label: 'Nombre del plan' }),
              items: widgets.list({
                label: 'Detalles',
                fields: {
                  txt: widgets.string({ label: 'Texto' }),
                },
              }),
              btn: widgets.object({
                label: 'Boton',
                fields: {
                  txt: widgets.string({ label: 'Texto Enlace' }),
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
        },
      }),
    };
    const model = collections.files(
      {
        label: 'Home',
        files,
      },
    );
    return model;
  },
});
