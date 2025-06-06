export default definePage({
  name: 'blog1',
  view: {
    bundle: '_default',
    template: 'MainBlog1',
    layout: 'default1',
  },
  locales: {
    'es-ec': {
      url: '/blog',
      seo: async ({ locale }) => {
        const seo = await queryContent(`${locale.code}/pages/blog/seo`).fetch();
        return {
          ...seo,
          twitterSite: '',
          google: true,
          twitter: true,
          facebook: true,
        };
      },
      context: async({ locale }) => {
        const page = { locale: locale.code };
        const req = { $content: queryContent };

        const top = await req
          .$content(`${page.locale}/posts/blogs`)
          .sortBy('slug', 'desc')
          .only(['url', 'image', 'seo', 'autor', 'category', 'date'])
          .limit(3)
          .fetch();

        const blogs = await req
          .$content(`${page.locale}/posts/blogs`)
          .sortBy('slug', 'desc')
          .only(['url', 'image', 'seo', 'autor', 'category', 'date'])
          .skip(3)
          .fetch();

        return {
          blogs,
          top,
        };
      },
    },
  },
});
