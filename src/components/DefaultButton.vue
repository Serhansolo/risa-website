<template>
  <div class='button'> {{ title }} </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  props: {
    title: String,
  },
})
export default class DefaultButton extends Vue {

}

</script>

<style scoped>
  .button {
    min-width: 125px;
    border-radius: 30px;
    padding: 10px 10px;
    border: 1px solid white;
    margin: 0 5px;
    text-transform: uppercase;
    cursor: pointer;
  }
</style>
