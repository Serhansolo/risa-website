<template >
  <div :class="$style.case_card">

  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class CasseCard extends Vue {
}
</script>

<style module>
  .case_card {
    width: 290px;
    height: 320px;
    background-color: rgb(119, 119, 119);
  }
</style>
