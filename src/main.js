import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import $ from 'jquery';
import 'bootstrap';
import App from './App.vue';
import router from './router';

Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
window.$ = $;
Vue.filter('date', (value) => {
  const date = value.slice(5);
  return date;
});
Vue.filter('sale', (value) => `可售${value}位`);
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
