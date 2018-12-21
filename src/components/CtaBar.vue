<template>
  <div :class="$style.cta_bar">
    <div :class="$style.bar_content">
      <div :class="$style.text_wrapper">
        <h1>{{ barTitle }}</h1>
        <h2>{{ barDescription }}</h2>
      </div>
      <div :class="$style.button_wrapper">
        <DefaultButton
          isFilled=true
          :title="buttonText"
        />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>


import { Component, Prop, Vue } from 'vue-property-decorator';
import DefaultButton from '@/components/DefaultButton.vue';

@Component({
  components: {
    DefaultButton,
  },
})
export default class CtaBar extends Vue {
  @Prop({ default: 'Contact us' }) buttonText!: string

  @Prop({ default: 'Get expert advice and start developing' }) barTitle!: string

  @Prop({ default: 'Get the developers that match your projects' }) barDescription!: string
}
</script>

<style module>
.cta_bar {
  width: 100%;
  height: 175px;
  background-color: rgb(30, 30, 30);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.bar_content {
  max-width: 1170px;
  padding: 0 45px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.text_wrapper {
  width: 100%;
}

.text_wrapper h1 {
  width: 100%;
  font-size: 26px;
  margin-bottom: 10px;
}

.text_wrapper h2 {
  font-family: 'Muli';
  font-size: 14px;
  font-weight: 400;
}

.button_wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}



</style>
