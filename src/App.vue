<template>
  <div id="app">
    <MainMenu/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainMenu from '@/components/MainMenu.vue';

@Component({
  components: {
    MainMenu,
  },
})
export default class App extends Vue {}
</script>

<style>
  body, html {
    margin: 0;
    color: #FFFFFF;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
  }

  h1 {
    margin: 0
  }


</style>
