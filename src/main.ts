import Vue from 'vue';
import VueWaypoint from 'vue-waypoint';
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import App from './App.vue';
import router from './router';

Vue.component('v-icon', Icon)

// Waypoint plugin
Vue.use(VueWaypoint);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
