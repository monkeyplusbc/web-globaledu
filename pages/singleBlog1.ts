export default defineDynamicPage({
  name: 'blogs',
  view: {
    bundle: '_default',
    template: 'SingleBlog',
    layout: 'default1',
  },
  locales: {
    'es-ec': {
      url: '/blogs/**',
      seo: ({ dynamic }) => {
        return {
          ...dynamic.context?.seo,
        };
      },
      dynamic: {
        method: async({ locale }) => {
          //
          const blogs = await queryContent(`${locale.code}/posts/blogs`).fetch();
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

        const sugeridos = await req
          .$content(`${page.locale}/posts/blogs`)
          .sortBy('slug', 'desc')
          .only(['url', 'image', 'seo'])
          .limit(3)
          .fetch();

        return {
          name: 'Hola',
          sugeridos,
          data: cms?.$page || dynamic.context,
        };
      },
    },
  }
});
