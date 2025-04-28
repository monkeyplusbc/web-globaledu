export default definePage({
  name: 'contact1',
  view: {
    bundle: '_default',
    template: 'MainContact1',
    layout: 'default1',
  },
  locales: {
    'es-ec': {
      url: '/contact1',
      seo: async ({ locale }) => {
        const seo = await queryContent(`${locale.code}/pages/contact1/seo`).fetch();
        return {
          ...seo,
          twitterSite: '',
          google: true,
          twitter: true,
          facebook: true,
        };
      },
      context: async () => {
        // const page = { locale: 'es-ec' };
        // const req = { $content: queryContent };

        // const variable = await req
        //   .$content(`${page.locale}/carpeta/json`)
        //   .fetch();

        return {
          autor: 'Autor del código',
        };
      },
    },
  },
});
