export default definePage({
    name: 'services1',
    view: {
      bundle: '_default',
      template: 'MainServices1',
      layout: 'default1',
    },
    locales: {
      'es-ec': {
        url: '/services1',
        seo: async ({ locale }) => {
          const seo = await queryContent(`${locale.code}/pages/services1/seo`).fetch();
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
  