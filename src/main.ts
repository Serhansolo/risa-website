import Vue from 'vue';
import VueWaypoint from 'vue-waypoint';
import App from './App.vue';
import router from './router';


// Waypoint plugin
Vue.use(VueWaypoint);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
