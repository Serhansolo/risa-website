<template>
  <div :class="$style.section_wrapper">
    <div :class="isCentered ? [$style.section_header, $style.center] : $style.section_header">
      <h2>{{ title }}</h2>
      <h2>{{ caption }}</h2>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SectionHeader extends Vue {
@Prop(String) title!: string

@Prop(String) caption!: string

@Prop(String) description!: string

@Prop({ default: false }) isCentered!: boolean
}

</script>

<style module>
.section_wrapper {
  width: 100%;
  max-width: 1140px;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.center {
  text-align: center;
  margin: 0 auto;
}

.section_header {
  color: black;
}

.section_header {
  color: black;
  max-width: 800px;
  padding: 90px 0 40px;
  line-height: 25px;
}

.section_header h2:nth-of-type(1) {
  font-family: 'Muli';
  color: rgb(85, 128, 255);
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.section_header h2 {
  font-size: 34px;
  margin-bottom: 20px;
}

.section_header p {
  font-size: 14px;
  margin-bottom: 20px;
}

</style>
