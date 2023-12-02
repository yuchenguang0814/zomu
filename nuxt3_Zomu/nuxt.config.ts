// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        {rel: 'stylesheet',href: '/css/style.css'},
        {rel: 'stylesheet',href: '/css/component.css'},
      ],
      script: [
        {src: 'js/jquery-1.7.2.min.js'},{src: 'js/adaptive.js'},{src: 'js/jquery-1.7.2.min.js'},{src: 'js/anime.min.js'},{src: 'js/enquire.min.js'},
        {src: 'js/tabsnav.js'},{src: 'js/common.js'}
      ]
    }
  }
})
