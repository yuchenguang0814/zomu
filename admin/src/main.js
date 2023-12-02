import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import Particles from 'particles.vue3'
import 'element-plus/dist/index.css'
import '../util/aixos.config'
createApp(App).use(router).mount('#app')
createApp(App).use(ElementPlus).use(Particles).use(store).use(router).mount('#app')
