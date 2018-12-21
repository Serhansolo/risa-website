<template >
  <div :class="$style.case_card">
    <div :class="$style.image_window">

    </div>
    <h1></h1>
    <h2></h2>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CaseCard extends Vue {
}
</script>

<style module>
  .case_card {
    width: 290px;
    height: 320px;
    border: 1px solid black;
  }

  .image_window {
    width: 290px;
    height: 320px;
    background-color: rgb(119, 119, 119);
  }

</style>
