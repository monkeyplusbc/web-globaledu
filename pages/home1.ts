export default definePage({
  name: 'home1',
  view: {
    bundle: '_default',
    template: 'MainHome1',
    layout: 'default1',
  },
  locales: {
    'es-ec': {
      url: '/',
      seo: async ({ locale }) => {
        const seo = await queryContent(`${locale.code}/pages/home1/seo`).fetch();
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
