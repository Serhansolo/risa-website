<template>
  <div id="app">
    <MainMenu/>
    <router-view/>
    <PartnerBar/>
    <Footer/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import MainMenu from '@/components/MainMenu.vue';
import Footer from '@/components/Footer.vue';
import ServiceCard from '@/components/ServiceCard.vue';
import PartnerBar from '@/components/PartnerBar.vue';



@Component({
  components: {
    MainMenu,
    Footer,
    PartnerBar,
  },
})
export default class App extends Vue {


}

</script>

<style>
@font-face {
  font-family: "Muli";
  src: url("/assets/fonts/Multi-Regular.ttf").format("truetype"),
       url("/assets/typo/Multi-Regular.ttf").format("truetype");
}

@font-face {
  font-family: "Poppins";
    src:  url("/assets/fonts/Poppins-Regular.ttf").format("truetype"),
          url("/assets/typo/Poppins-Regular.ttf").format("truetype");
}

body, html {
  margin: 0;
  color: rgb(254, 254, 254);
  font-family: "Poppins";
}

h1, h2, html, body, p {
  margin: 0;
  padding: 0;
}

.filling {
  width: 100%;
  Height : 500px;
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
