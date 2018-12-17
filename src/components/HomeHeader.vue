<template>
  <div :class='$style.home_header'>
    <div :class='$style.overlay'>
      <div :class='$style.text_wrapper'>
        <h1>The Solutions to</h1>
        <h1>Grow your Business</h1>
        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
        <div :class='$style.button_wrapper'>
          <DefaultButton
            title='Button dit?'
          />
          <DefaultButton
            title='werkt dit?'
          />
        </div>
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
export default class HomeHeader extends Vue {}

</script>

<style module>
.home_header {
  width: 100%;
  height: 720px;
  /* background-image: url('../assets/stock-picture.jpg'); */
  color: rgb(51, 75, 144);
  background-size: cover;
  overflow: hidden;
  color: white;

}

.overlay {
  position: relative; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 150, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text_wrapper {
  max-width: 500px;
}

.text_wrapper h1:nth-of-type(1) {
  font-weight: 400;
  font-size: 48px;
  color: white;

}

.text_wrapper h1:nth-of-type(2) {
  font-weight: bold;
  font-size: 48px;
  margin-bottom: 20px;
}

.text_wrapper h2 {
  font-size: 14px;
  font-weight: 200;
  margin-bottom: 40px;
  line-height: 20px;
  font-family: 'Muli';
}

.button_wrapper {
  display: flex;
  justify-content: center;
}
</style>
