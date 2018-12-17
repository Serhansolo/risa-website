<template>
<nav :class='$style.main_menu'>
  <div :class='$style.navigation_wrapper'>
    <div :class='$style.logo_wrapper'>
      <img :class='$style.navigation_logo' alt='Vue logo' src='../assets/logo.png'>
      <h2 :class='$style.navigation_title'>Rounding</h2>
    </div>
    <div :class='$style.navigation_link_bar'>
      <RouteItem
        v-for='route in routes'
        :route='route.route'
        :name='route.name'
      />
    </div>
  </div>
</nav>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import RouteItem from '@/components/RouteItem.vue';

@Component({
  components: {
    RouteItem,
  },
})
export default class MainMenu extends Vue {
  routes = [
    {
      route: '/',
      name: 'Home'
    },
    {
      route: '/team',
      name: 'Team'
    },
    {
      route: '/about',
      name: 'About'
    }
  ]
}

</script>

<style module>
.navigation_title  {
  margin-left: 10px;
  font-size: 18px;
}

.main_menu {
  padding: 22px 0;
  background-color: rgba(20, 30, 58);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  font-weight: 500;
}

.navigation_wrapper {
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 800px;
  justify-content: center;
  align-items: center;
}

.navigation_logo {
  width: 20px;
  height: 20px;
}

.logo_wrapper {
  display: flex;
  align-items: center;
}

.navigation_link_bar {
  height: 20px;
}

.logo_wrapper {
  flex: 1;
}
</style>
