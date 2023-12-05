import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
export default createStore({
  state: {
    isGetterRouter: false,
    isCollapsed: false,
    userInfo: {
    }
  },
  getters: {
  },
  mutations: {
    changeGetteRouter (state, value) {
      state.isGetterRouter = value
    },
    changeCollapsed (state) {
      state.isCollapsed = !state.isCollapsed
    },
    changeUserInfo(state, value) {
      state.userInfo = {
        ...state.userInfo,
        ...value
      }
    },
    clearUserInfo(state, value) {
      state.userInfo = {}
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState({
    paths: ['isCollapsed', 'userInfo']
  })]
})
