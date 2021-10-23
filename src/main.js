import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// Interceptors
import { requestInterceptor } from './shared/requets.interceptor';


Vue.config.productionTip = false
// Make Vuelidate available throughout the project
Vue.use(Vuelidate)
// Make BootstrapVue available throughout the project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
// interceptor to modify original Http request
requestInterceptor.globalInterceptor;


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
