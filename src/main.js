import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import api from './plugins/axios'
Vue.prototype.$api = api
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
