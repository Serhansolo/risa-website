<template>
<nav>
  <div class="navigation-wrapper">
    <div class="logo-wrapper">
      <img class="navigation-logo" alt="Vue logo" src="../assets/logo.png">
      <h2>Risa - IT</h2>
    </div>
    <div class="navigation-link-bar">
      <RouteItem
        v-for="route in routes"
        :route="route.route"
        :name="route.name"
      />
    </div>
  </div>
</nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import RouteItem from '@/components/RouteItem.vue';

@Component({
  components: {
    RouteItem
  }
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

<style scoped>
h2  {
  margin-left: 10px;
  font-size: 12px;
  text-transform: uppercase;
}

nav {
  padding: 4px 0;
  background-color: rgba(0, 0, 28, 0.6);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
  font-weight: 500;
}

.navigation-wrapper {
  width: 100%;
  display: flex;
  margin: 0 auto;
  max-width: 500px;
  justify-content: center;
  align-items: center;
}

.navigation-logo {
  width: 20px;
  height: 20px;
}

.logo-wrapper {
  display: flex;
  align-items: center;
}

.navigation-link-bar {
  height: 20px;
}

.logo-wrapper {
  flex: 1;
}
</style>
