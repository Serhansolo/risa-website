import Vue from 'vue';
import VueWaypoint from 'vue-waypoint';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon.vue';
import VueCarousel from '@chenfengyuan/vue-carousel';
import App from './App.vue';
import router from './router';
import SlideOne from '@/components/slides/SlideOne.vue';

Vue.component('SlideOne', SlideOne);
Vue.component('v-icon', Icon);
Vue.component(VueCarousel.name, VueCarousel);
Vue.use(VueWaypoint);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
