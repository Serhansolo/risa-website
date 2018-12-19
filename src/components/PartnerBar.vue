<template>
  <div :class="$style.partner_bar">
    <div :class="$style.partner_wrapper">
      <img :src="'@/assets/logos/01@3x.png'" alt="">
      <img :src="'@/assets/logos/02@3x.png'" alt="">
      <img :src="'@/assets/logos/03@3x.png'" alt="">
      <img :src="'@/assets/logos/04@3x.png'" alt="">
      <img :src="'@/assets/logos/05@3x.png'" alt="">
    </div>
  </div>
</template>

<script  lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PartnerBar extends Vue {
}

</script>

<style module>
  .partner_bar {
    width: 100%;
    height: 180px;
    background-color: #F4F7FC;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .partner_wrapper {
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .partner_wrapper img {
    width: 120px;
  }

</style>
