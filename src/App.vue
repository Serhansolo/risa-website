<template>
  <div id="app">
    <MainMenu/>
    <router-view/>
    <!-- <div class="filling">

    </div> -->
    <Footer/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainMenu from '@/components/MainMenu.vue';
import Footer from '@/components/Footer.vue';

@Component({
  components: {
    MainMenu,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style>
  body, html {
    margin: 0;
    color: rgb(254, 254, 254);
    font-family: "Trebuchet MS", Helvetica, sans-serif;
  }

  h1 {
    margin: 0
  }

  .filling {
    width: 100%;
    Height : 1000px;
  }
</style>
