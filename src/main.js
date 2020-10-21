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
// Vue.filter('rating', (value) => {
// let rating = '';
// for (let i = 0; i < 5; i += 1) {
//   if (i < value) {
//     rating += '<i class="fas fa-star" style="color:#aaa"></i>';
//   } else {
//     rating += '<i class="fas fa-star"></i>';
//   }
// }
// return rating;
// });
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
