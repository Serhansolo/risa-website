<template>
  <div
    @mouseover="isHovering=true"
    @mouseout="isHovering=false"
    :class="{
      [$style.button]:true,
      [$style.filled]:isFilled,
      [$style.shadow]:hasBoxShadow
    }">
    {{ title }}
  <span :class="{ [$style.icon]:true, [$style.show]:isHovering }"><v-icon name="long-arrow-alt-right"/></span>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DefaultButton extends Vue {
  @Prop({ default: false }) isFilled!: boolean

  @Prop({ default: 'Default A' }) title!: string

  @Prop({ default: false }) isHovering!: boolean

  @Prop({ default: false }) hasBoxShadow!: boolean
}

</script>

<style module>
  .icon {
    position: relative;
    top: 2px;
    margin-left: 4px;
  }

  .button {
    min-width: 125px;
    border-radius: 30px;
    padding: 15px 35px;
    border: 1px solid white;
    background-color: white;
    margin: 0 5px;
    text-transform: uppercase;
    cursor: pointer;
    text-align: center;
    max-height: 40px;
    user-select: none;
  }

  .shadow {
    box-shadow: 0 0 50px rgba(204, 204, 204, .5);
  }

  .button span.show {
    opacity: 1;
    transition: all .2s;
  }

  .button span {
    opacity: 0;
    transition: all .2s;
  }

  .filled {
    border-color: rgb(85, 128, 255);
    background-color: rgb(85, 128, 255);
  }
</style>
