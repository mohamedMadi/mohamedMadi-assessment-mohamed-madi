import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import Tasks from './tasks'


export default new Vuex.Store({
  modules:{
    Tasks
  }
})
