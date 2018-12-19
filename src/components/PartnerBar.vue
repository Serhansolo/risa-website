<template>
  <div :class="$style.partner_bar">
    <div :class="$style.partner_wrapper">
      <img v-for ="partner in partners" :src="require(`@/assets/logos/${partner.src}.png`)" :alt="partner.title">
    </div>
  </div>
</template>

<script  lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class PartnerBar extends Vue {

partners = [
  {
    title: 'ingredis',
    src: '01@3x',
  },
  {
    title: 'vonde',
    src: '02@3x',
  },
  {
    title: 'be_my_queen',
    src: '03@3x',
  },
  {
    title: 'indie',
    src: '04@3x',
  },
  {
    title: 'alaska',
    src: '05@3x',
  },
]

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
