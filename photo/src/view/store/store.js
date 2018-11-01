import Vue from 'vue'
import Vuex from 'vuex'
import store from './modules/stores'
import portfollo from './modules/portfollo'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    portfollo,
    store
  }
})
