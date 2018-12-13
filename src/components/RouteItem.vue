<template>
  <router-link :to="route" tag="li">{{ name }}</router-link>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props: {
    route: String,
    name: String
  }
})
export default class RouteItem extends Vue {}

</script>

<style scoped>
  .router-link-exact-active {
    color: #0652DD;
  }

  li {
    list-style: none;
    display: inline-block;
    cursor: pointer;
    margin-left: 30px;
  }

</style>
