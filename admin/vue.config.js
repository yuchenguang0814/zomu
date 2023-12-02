const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, /*关闭语法检查*/
  // 配置反向代理
  devServer: {
    proxy: {
      '/admin': {
        target: 'http://localhost:3000/',//需代理的后端接口
        changeOrigin: true
      }
    }
  }
})
