export default definePage({
  name: 'project1',
  view: {
    bundle: '_default',
    template: 'MainProject1',
    layout: 'default1',
  },
  locales: {
    'es-ec': {
      url: '/soluciones-integrales',
      seo: async ({ locale }) => {
        const seo = await queryContent(`${locale.code}/pages/project1/seo`).fetch();
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

        const projects = await req
          .$content(`${page.locale}/pages/projects`)
          .sortBy('slug', 'desc')
          .only(['url', 'seo', 'gallery', 'category'])
          .fetch();

        return {
          projects,
        };
      },
    },
  },
});
