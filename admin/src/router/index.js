import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Mainbox from '../views/MainBox.vue'
import RoutesConfig from './config'
import stroe from '../store'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/mainbox',
    name: 'mainbox',
    component: Mainbox
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
const ConfigRouter = () => {
  RoutesConfig.forEach(item => {
    router.addRoute('mainbox', item)
  })
  stroe.commit('changeGetteRouter', true)
}
router.beforeEach((to, from, next) => {
  if (to.name === 'login') {
    next()
  } else {
    if (!localStorage.getItem('token')) {
      next({
        path: 'login'
      })
    } else {
      if (!stroe.state.isGetterRouter) {
        ConfigRouter()
        next({
          path: to.fullPath
        })
      } else {
        next()
      }
    }
  }
})

export default router
