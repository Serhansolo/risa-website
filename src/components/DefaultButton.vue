<template>
  <div :class="isFilled ? [$style.button, $style.filled] : $style.button">{{ title }}</div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DefaultButton extends Vue {

  @Prop({ default: false }) isFilled!: boolean

  @Prop({ default: 'Default A' }) title!: string
}

</script>

<style module>
  .button {
    min-width: 125px;
    border-radius: 30px;
    padding: 15px 35px;
    border: 1px solid white;
    margin: 0 5px;
    text-transform: uppercase;
    cursor: pointer;
    text-align: center;
    max-height: 40px;
    max-width: 150px;
  }

  .filled {
    border-color: rgb(85, 128, 255);
    background-color: rgb(85, 128, 255);
  }


</style>
