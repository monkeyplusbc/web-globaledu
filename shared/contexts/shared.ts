export default defineSharedContext({
  async setup({ utils, page, dynamic }) {
    // const page = { locale: 'es-ec' };
    // const req = { $content: queryContent };

    // const variable = await req
    //   .$content(`${page.locale}/carpeta/json`)
    //   .fetch();

    const pageName = dynamic?.name ? page.name.replace('**', dynamic.name) : page.name;

    const pageLangs = {
      en: await utils.getUrl(pageName, 'en-ec'),
      es: await utils.getUrl(pageName, 'es-ec'),
    };

    return {
      pageLangs,
      message: 'shared context',
    };
  },
});
