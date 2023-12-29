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
        {rel: 'stylesheet',href: '/css/block-icon.css'},
        {rel: 'stylesheet',href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css'}
      ]
    }
  }
})
