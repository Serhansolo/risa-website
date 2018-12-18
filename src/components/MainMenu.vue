<template>
<nav :class='$style.main_menu'>
  <div :class='$style.navigation_wrapper'>
    <div :class='$style.logo_wrapper'>
      <img :class='$style.navigation_logo' alt='Vue logo' src='../assets/logo.png'>
      <h2 :class='$style.navigation_title'>Rounding</h2>
    </div>
    <div :class='$style.navigation_link_bar'>
      <li v-for='route in routes'>
        <router-link :to='route.route' tag='a'>{{ route.name }}</router-link>
      </li>
    </div>
  </div>
</nav>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';

@Component
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

<style>
.router-link-exact-active {
  color: rgb(85, 128, 255) !important;
}

</style>

<style module>

.navigation_link_bar li {
  list-style: none;
  display: inline-block;
  cursor: pointer;
  margin-left: 30px;
  font-size: 12px;
}

.navigation_link_bar a {
  text-decoration: none;
  color: white;
}

.navigation_title  {
  margin-left: 10px;
  font-size: 18px;
}

.main_menu {
  padding: 22px 0;
  background-color: rgba(20, 30, 58);
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
