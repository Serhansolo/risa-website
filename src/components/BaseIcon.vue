<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 42 43"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title
      :id="iconName"
      lang="en"
    >{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script  lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class BaseIcon extends Vue {
  @Prop({ default: 'box' }) iconName!: string
  @Prop({ default: 43 }) width!: number | string
  @Prop({ default: 42 }) height!: number | string
  @Prop({ default: '#00000' }) iconColor!: string
}

</script>
