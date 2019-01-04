<template>
  <div :class="$style.home_header">
    <div :class="$style.overlay"></div>
    <div :class="$style.text_wrapper">
      <h1>{{ title.top }}</h1>
      <h1>{{ title.bottom }}</h1>
      <h2>{{ description }}</h2>
      <div :class="$style.button_wrapper">
        <DefaultButton
          title="Ontdek meer"
          isFilled=true
        />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import DefaultButton from '@/components/DefaultButton.vue';
import { HomeTitle } from '@/types';

@Component({
  components: {
    DefaultButton,
  },
})
export default class HomeHeader extends Vue {
  @Prop({ default: () => ({ top: 'The Solutions to', bottom: 'Grow your Business' }) }) title!: HomeTitle

  @Prop({ default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }) description!: string
}

</script>

<style module>
.home_header {
  width: 100%;
  height: 900px;
  color: rgb(51, 75, 144);
  background-size: cover;
  background-image: url('@/assets/stock_picture.jpg');
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 900px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(45, 69, 144, .5);
}

.text_wrapper {
  max-width: 650px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.text_wrapper h1:nth-of-type(1) {
  font-weight: 400;
  font-size: 58px;
  color: white;
}

.text_wrapper h1:nth-of-type(2) {
  font-weight: bold;
  font-size: 58px;
  margin-bottom: 30px;
}

.text_wrapper h2 {
  font-size: 14px;
  font-weight: 200;
  margin-bottom: 40px;
  line-height: 20px;
  font-family: "Muli";
  max-width: 600px;
}

.button_wrapper {
  display: flex;
  justify-content: center;
}
</style>
