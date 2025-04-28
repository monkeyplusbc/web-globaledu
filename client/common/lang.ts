import { createApp } from 'petite-vue';

function langs() {
  return createApp({
    changeLang(link: string, lang: string, pageLink: string) {
      localStorage.setItem('lang-select', lang);
      localStorage.setItem('lang-link', link);
      //   console.log(selectIdioma, alternativeUrl);

      location.replace(pageLink || link);
    },
  });
}
langs().mount('#lang');
