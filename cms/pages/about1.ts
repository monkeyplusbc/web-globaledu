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
          bg: widgets.image({
            label: 'Imagen de Fondo',
            required: false, 
            media_folder: '/public/assets/images/photos',
            public_folder: '/assets/images/photos',
          }),
          title: widgets.string({ label: 'Título', required: false }),
          description: widgets.markdown({ label: 'Descripción', required: false }),
        },
      }),
      how: collections.file({
        label: 'Sección Quiénes Somos',
        fields: {
          active: widgets.boolean({ label: 'Activar' }),
          whoAreWe: widgets.object({
            label: 'Contenido Quiénes Somos',
            fields: {
              icon: widgets.image({
                label: 'Icono',
                required: false,
                media_folder: '/public/assets/images/icons/lineal',
                public_folder: '/assets/images/icons/lineal',
              }),
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
                  src: widgets.image({ label: 'Imagen', required: true }),
                  alt: widgets.string({ label: 'Texto Alternativo' }),
                  title: widgets.string({ label: 'Título de la Imagen' }),
                  position: widgets.select({
                    label: 'Posición',
                    options: [
                      { label: 'Derecha', value: 'right' },
                      { label: 'Izquierda', value: 'left' },
                    ],
                  }),
                },
              }),
            },
          }),
          workingSteps: widgets.object({
            label: 'Sección Pasos de Trabajo',
            fields: {
              icon: widgets.image({ label: 'Icono', required: false }),
              head: widgets.string({ label: 'Título Principal' }),
              title: widgets.string({ label: 'Subtítulo' }),
              lead: widgets.markdown({ label: 'Texto de Introducción' }),
              txt: widgets.markdown({ label: 'Texto' }),
              btn: widgets.object({
                label: 'Botón',
                fields: {
                  txt: widgets.string({ label: 'Texto del Botón' }),
                  link: widgets.object({
                    label: 'Enlace del Botón',
                    fields: linkOrButton(widgets),
                  }),
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
          active: widgets.boolean({ label: 'Activar' }),
          title: widgets.string({ label: 'Título' }),
          img: widgets.image({ label: 'Imagen', required: false }),
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
          active: widgets.boolean({ label: 'Activar' }),
          title: widgets.string({ label: 'Título' }),
          icon: widgets.image({ label: 'Icono', required: false }),
          teamMembers: widgets.list({
            label: 'Miembros del Equipo',
            fields: {
              image: widgets.image({ label: 'Imagen', required: true }),
              title: widgets.string({ label: 'Nombre', required: true }),
              subtitle: widgets.string({ label: 'Subtítulo' }),
              txt: widgets.markdown({ label: 'Descripción' }),
              networks: widgets.object({
                label: 'Redes Sociales',
                fields: {
                  active: widgets.boolean({ label: 'Activar Redes Sociales', default: true }),
                  items: widgets.list({
                    label: 'Redes',
                    fields: {
                      icon: widgets.string({ label: 'Icono (ej: ic:baseline-facebook, mdi:linkedin)' }),
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
          active: widgets.boolean({ label: 'Activar' }),
          title: widgets.string({ label: 'Título' }),
          counters: widgets.list({
            label: 'Contadores',
            fields: {
              icon: widgets.image({ label: 'Icono', required: false }),
              value: widgets.number({ label: 'Valor', required: true }),
              label: widgets.string({ label: 'Etiqueta', required: true }),
            }
          }),
        },
      }),
      contact: collections.file({
        label: 'Contacto',
        fields: {
          active: widgets.boolean({ label: 'Activar' }),
          title: widgets.string({ label: 'Título' }),
          img: widgets.image({ label: 'Imagen', required: false }),
          icon: widgets.image({ label: 'Icono', required: false }),
          titleSection: widgets.string({ label: 'Título de la Sección' }),
          contactInfo: widgets.list({
            label: 'Información de Contacto',
            fields: {
              icon: widgets.string({ label: 'Icono (ej: uil:location-pin-alt)' }),
              title: widgets.string({ label: 'Título' }),
              details: widgets.markdown({ label: 'Detalles' }),
            }
          }),
        },
      }),
    };
    const model = collections.files(
      {
        label: 'About',
        files,
      },
    );
    return model;
  },
});
