import Vue from 'vue'
import App from './App.vue'
import router from './plugins/router'
import api from './plugins/axios'
import installComponents from './plugins/installComponents';
Vue.prototype.$api = api
Vue.config.productionTip = false

installComponents()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
