import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'  // install vuerouter
import routes from './routes';

Vue.config.productionTip=false
Vue.use(VueRouter) // install vuerouter
const router = new VueRouter({routes}); // install vuerouter

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
