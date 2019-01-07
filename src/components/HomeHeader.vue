<template>
  <carousel :data="slides"></carousel>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HomeHeader extends Vue {
  slides = [
    {
      template: '<div><SlideOne/></div>',
    },
    {
      template: '<div><SlideOne/></div>',
    },
    {
      template: '<div><SlideOne/></div>',
    },
  ]
}
</script>
