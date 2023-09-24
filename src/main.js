import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Multiselect from "vue-multiselect";
Vue.component("multiSelect", Multiselect);


import VModal from 'vue-js-modal/dist/index.nocss.js'
import 'vue-js-modal/dist/styles.css'
Vue.use(VModal)

import 'vuejs-noty/dist/vuejs-noty.css'
import VueNoty from 'vuejs-noty'
Vue.use(VueNoty)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
