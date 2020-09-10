import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import VueAnalytics from 'vue-analytics'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: ['UA-176728788-2'],
  router
})

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
