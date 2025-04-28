export default defineDynamicPage({
  name: 'projects',
  view: {
    bundle: '_default',
    template: 'SingleProject',
    layout: 'default1',
  },
  locales: {
    'es-ec': {
      url: '/soluciones/**',
      seo: ({ dynamic }) => {
        return {
          ...dynamic.context?.seo,
        };
      },
      dynamic: {
        method: async({ locale }) => {
          //
          const blogs = await queryContent(`${locale.code}/pages/projects`).fetch();
          return blogs.map((page) => {
            return {
              name: page.slug,
              slug: page.slug,
              context: page,
              url: page.url,
            };
          });
        },
      },
      context: async({ locale, dynamic, cms }) => {
        const page = { locale: locale.code };
        const req = { $content: queryContent };

        return {
          name: 'Hola',
          data: cms?.$page || dynamic.context,
        };
      },
    },
  }
});
