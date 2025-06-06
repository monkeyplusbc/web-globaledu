import { linkOrButton, media, notNested, seoFields } from '../__shared';

export default defineCmsCollection({
  dir: 'about1',
  group: 'pages',
  injectContext: {
    assign: 'about1',
    page: 'about1',
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
          title: widgets.string({ label: 'Título', required: false }),
          description: widgets.markdown({ label: 'Descripción', required: false }),
          bg: widgets.image({ label: 'Imagen', required: true, ...media.nosotros, hint: 'Medidas: 1920px*700px' }),
        },
      }),
      how: collections.file({
        label: 'Sección Quiénes Somos',
        fields: {
          active: widgets.boolean({ label: 'Activar', default: true }),
          whoAreWe: widgets.object({
            label: 'Contenido Quiénes Somos',
            fields: {
              icon: widgets.image({ label: 'Imagen', required: true, ...media.nosotros, hint: 'Medidas: 52px*52px' }),
              title: widgets.string({ label: 'Título' }),
              lead: widgets.markdown({ label: 'Texto de Introducción' }),
              description: widgets.markdown({ label: 'Descripción' }),
              list1: widgets.list({
                label: 'Lista 1',
                fields: {
                  txt: widgets.string({ label: 'Texto' }),
                },
              }),
              list2: widgets.list({
                label: 'Lista 2',
                fields: {
                  txt: widgets.string({ label: 'Texto' }),
                },
              }),
              images: widgets.list({
                label: 'Imágenes',
                fields: {
                  img: widgets.image({ label: 'Imagen', required: true, ...media.nosotros }),
                },
              }),
            },
          }),
          workingSteps: widgets.object({
            label: 'Sección Pasos de Trabajo',
            fields: {
              icon: widgets.image({ label: 'Imagen', required: true, ...media.nosotros, hint: 'Medidas: 52px*52px' }),
              head: widgets.string({ label: 'Título Principal' }),
              title: widgets.string({ label: 'Subtítulo' }),
              lead: widgets.markdown({ label: 'Texto de Introducción' }),
              txt: widgets.markdown({ label: 'Texto' }),
              items: widgets.list({
                label: 'Pasos de Trabajo',
                fields: {
                  title: widgets.string({ label: 'Título del Paso' }),
                  txt: widgets.markdown({ label: 'Texto del Paso' }),
                },
              }),
            },
          }),
        },
      }),
      how2: collections.file({
        label: 'Sección Quiénes Somos 2',
        fields: {
          active: widgets.boolean({ label: 'Activar', default: true }),
          whoAreWe: widgets.object({
            label: 'Contenido Quiénes Somos',
            fields: {
              icon: widgets.image({ label: 'Imagen', required: true, ...media.nosotros, hint: 'Medidas: 52px*52px' }),
              title: widgets.string({ label: 'Título' }),
              lead: widgets.markdown({ label: 'Texto de Introducción' }),
              description: widgets.markdown({ label: 'Descripción' }),
              list1: widgets.list({
                label: 'Lista 1',
                fields: {
                  txt: widgets.string({ label: 'Texto' }),
                },
              }),
              list2: widgets.list({
                label: 'Lista 2',
                fields: {
                  txt: widgets.string({ label: 'Texto' }),
                },
              }),
              images: widgets.list({
                label: 'Imágenes',
                fields: {
                  img: widgets.image({ label: 'Imagen', required: true, ...media.nosotros }),
                },
              }),
            },
          }),
          workingSteps: widgets.object({
            label: 'Sección Pasos de Trabajo',
            fields: {
              icon: widgets.image({ label: 'Imagen', required: true, ...media.nosotros, hint: 'Medidas: 52px*52px' }),
              head: widgets.string({ label: 'Título Principal' }),
              title: widgets.string({ label: 'Subtítulo' }),
              lead: widgets.markdown({ label: 'Texto de Introducción' }),
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
                label: 'Pasos de Trabajo',
                fields: {
                  title: widgets.string({ label: 'Título del Paso' }),
                  txt: widgets.markdown({ label: 'Texto del Paso' }),
                },
              }),
            },
          }),
        },
      }),
      testimonials: collections.file({
        label: 'Testimonios',
        fields: {
          active: widgets.boolean({ label: 'Activar', default: true }),
          img: widgets.image({ label: 'Imagen', required: true, ...media.nosotros, hint: 'Medidas: 455px*620px' }),
          testimonials: widgets.list({
            label: 'Testimonios',
            fields: {
              quote: widgets.markdown({ label: 'Cita', required: true }),
              author: widgets.string({ label: 'Autor', required: true }),
              role: widgets.string({ label: 'Rol', required: true }),
            }
          }),
        },
      }),
      team: collections.file({
        label: 'Equipo',
        fields: {
          active: widgets.boolean({ label: 'Activar', default: true }),
          title: widgets.string({ label: 'Título' }),
          icon: widgets.image({ label: 'Imagen', required: true, ...media.icons, hint: 'Medidas: 55px*55px' }),
          teamMembers: widgets.list({
            label: 'Miembros del Equipo',
            fields: {
              icon: widgets.image({ label: 'Imagen', required: true, ...media.nosotros, hint: 'Medidas: 55px*55px' }),
              title: widgets.string({ label: 'Nombre', required: true }),
              subtitle: widgets.string({ label: 'Subtítulo' }),
              txt: widgets.markdown({ label: 'Descripción' }),
              networks: widgets.object({
                label: 'Redes Sociales',
                fields: {
                  active: widgets.boolean({ label: 'Activar Redes Sociales', default: true }),
                  items: widgets.list({
                    label: 'Red social',
                    fields: {
                      icon: widgets.string({ label: 'Ícono', hint: 'Buscar más íconos aquí: https://icon-sets.iconify.design/' }),
                      link: widgets.object({
                        label: 'Enlace',
                        fields: linkOrButton(widgets),
                      }),
                    },
                  }),
                },
              }),
            }
          }),
        },
      }),
      counter: collections.file({
        label: 'Contador',
        fields: {
          active: widgets.boolean({ label: 'Activar', default: true }),
          counters: widgets.list({
            label: 'Contadores',
            fields: {
              icon: widgets.image({ label: 'Icono', required: true, ...media.icons, hint: 'Medidas: 55px*55px' }),
              value: widgets.string({ label: 'Numero', required: true }),
              label: widgets.string({ label: 'Etiqueta', required: true }),
            }
          }),
        },
      }),
      contact: collections.file({
        label: 'Contacto',
        fields: {
          active: widgets.boolean({ label: 'Activar', default: true }),
          title: widgets.string({ label: 'Título' }),
          img: widgets.image({ label: 'Imagen', required: true, ...media.nosotros, hint: 'Medidas: 480px*550px' }),
          icon: widgets.image({ label: 'Icono', required: true, ...media.icons, hint: 'Medidas: 55px*55px' }),
          contactInfo: widgets.list({
            label: 'Información de Contacto',
            fields: {
              icon: widgets.string({ label: 'Ícono', hint: 'Buscar más íconos aquí: https://icon-sets.iconify.design/' }),
              title: widgets.string({ label: 'Título' }),
              details: widgets.markdown({ label: 'Detalles' }),
            }
          }),
        },
      }),
    };
    const model = collections.files(
      {
        label: 'Nosotros',
        files,
      },
    );
    return model;
  },
});
