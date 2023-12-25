// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {port: 4000},
  ssr: true,
  nitro: {
    devProxy: {
        '/web': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            prependPath: true
        },
    },
    // 该配置用于服务端请求转发
    routeRules: {
      '/apis/**': {
        proxy: 'http://localhost:3000/'
      }
    }
},
  app: {
    head: {
      link: [
        {rel: 'stylesheet',href: '/css/style.css'},
        {rel: 'stylesheet',href: '/css/component.css'},
      ],
      script: [
        {src: 'js/jquery-1.7.2.min.js'},{src: 'js/adaptive.js'},{src: 'js/anime.min.js'},{src: 'js/enquire.min.js'},
        {src: 'js/tabsnav.js'},{src: 'js/common.js'}
      ]
    }
  }
})
