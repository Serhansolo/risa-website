<template >
  <div :class="$style.case_card">
    <img
      :class="$style.image_window"
      :src="require(`@/assets/${this.imageSrc}`)"
    >
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CaseCard extends Vue {
  @Prop({ default: 'Creative financial planning' }) title!: string

  @Prop({ default: 'There are many variations of passsges of an that lorem ipsum available' }) description!: string

  @Prop({ default: 'stock_picture.jpg' }) imageSrc!: string
}
</script>

<style module>
  .case_card {
    width: 330px;
    height: 380px;
    color: black;
    cursor: pointer;
  }

  .image_window {
    width: 330px;
    height: 280px ;
    background-color: rgb(119, 119, 119);
  }

  .case_card h2 {
    font-size: 18px;
    margin-top: 20px;
  }

  .case_card:hover h2 {
    color: rgb(85, 128, 255);
  }

  .case_card p {
    margin-top: 10px;
    line-height: 25px;
  }

</style>
