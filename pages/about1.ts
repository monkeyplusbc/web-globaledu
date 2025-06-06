export default definePage({
    name: 'about1',
    view: {
      bundle: '_default',
      template: 'MainAbout1',
      layout: 'default1',
    },
    locales: {
      'es-ec': {
        url: '/sobre-nosotros',
        seo: async ({ locale }) => {
          const seo = await queryContent(`${locale.code}/pages/about1/seo`).fetch();
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
            autor: 'Eliud Rodriguez',
          };
        },
      },
    },
  });
  