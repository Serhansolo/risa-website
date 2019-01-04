<template>
  <div :class="$style.header">
    <div :class="$style.overlay"></div>
    <div :class="$style.header_content">
      <h1>{{ this.capitalize($route.name) }} page</h1>
      <div :class="$style.bread_crumbs">
        <h2
          v-for="(route, index) in routeObjectArray"
          :key="route.name"
        >
        <router-link :to="route.route" tag="a">{{ route.name }}</router-link>
        <h2 v-if="index !== routeObjectArray.length - 1">>></h2>
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { Route } from '@/types';

@Component
export default class Header extends Vue {
  routeObjectArray: Route[] = []

  mounted() {
    const newRouteObjectArray: Route[] = this.createRouteObject(`home${this.$route.path}`);
    this.routeObjectArray = newRouteObjectArray;
  }

  createRouteObject(fullRoute: string) {
    const routeArray: string[] = fullRoute.split('/');
    const routeObject: Route[] = [];

    routeArray.reduce((fullPath: string, currentRoute: string) => {
      const routePath: string = currentRoute === 'home' ? '' : currentRoute;

      routeObject.push({
        name: this.capitalize(this.removeHyphen(currentRoute)),
        route: fullPath += routePath,
      });

      return fullPath === '/' ? fullPath : `${fullPath}/`;
    }, '/');

    return routeObject;
  }

  capitalize = (x: string): string => x.charAt(0).toUpperCase() + x.slice(1);

  removeHyphen = (x: string): string => x.replace(/-/g, ' ');
}

</script>

<style module>
  .header {
    width: 100%;
    height: 385px;
    background-image: url('@/assets/stock_picture.jpg');
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 385px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(45, 69, 144, .5);
  }

  .header_content {
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header_content h1 {
    font-family: 'Muli';
    margin-bottom: 20px;
    font-size: 30px;
    z-index: 2;
  }

  .header_content h2 {
    font-family: 'Muli';
    font-weight: 400;
    font-size: 14px;
    z-index: 2;
  }

  .header_content h2 h2 {
    display: inline;
    margin: 0 10px;
    font-weight: 500;
  }

  .bread_crumbs {
    display: flex;
    flex-direction: row;
  }

  .bread_crumbs a {
    color: white !important;
    text-decoration: none;
  }

  .bread_crumbs h2:last-of-type a {
    font-weight: 500;
  }
</style>
