import Vue from 'vue';
import App from './App.vue';
import router from './router';
import jQuery from 'jquery';
import VueWaypoint from 'vue-waypoint'

global.$ = jQuery;

// Waypoint plugin
Vue.use(VueWaypoint)

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
