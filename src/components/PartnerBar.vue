<template>
  <div :class="$style.partner_bar">
    <div :class="$style.partner_wrapper">
      <img
        v-for="partner in partners"
        :key="partner.title"
        :src="require(`@/assets/logos/${partner.src}`)"
        :alt="partner.title"
      />
    </div>
  </div>
</template>

<script  lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class PartnerBar extends Vue {
  partners = [
    {
      title: 'ingredis',
      src: '01@3x.png',
    },
    {
      title: 'vonde',
      src: '02@3x.png',
    },
    {
      title: 'be_my_queen',
      src: '03@3x.png',
    },
    {
      title: 'indie',
      src: '04@3x.png',
    },
    {
      title: 'alaska',
      src: '05@3x.png',
    },
  ]
}

</script>

<style module>
  .partner_bar {
    width: 100%;
    height: 220px;
    background-color: #F4F7FC;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .partner_wrapper {
    max-width: 1170px;
    padding: 0 45px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .partner_wrapper img {
    width: 140px;
  }

</style>
