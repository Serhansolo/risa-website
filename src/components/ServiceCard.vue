<template>
  <div
    :class="$style.service_card"
    @mouseover="isHovering=true"
    @mouseout="isHovering=false"
  >
    <div :class="$style.svg">
      <v-icon
        :name="icon"
        scale="2"
      />
    </div>
    <h2>{{ subjectName }}</h2>
    <p>{{ subjectDiscription }}</p>
    <div :class="$style.button_wrapper">
      <DefaultButton
        :title="buttonTitle"
        :isFilled="isHovering"
        hasBoxShadow=true
      />
    </div>

  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';
import DefaultButton from '@/components/DefaultButton.vue';

@Component({
  components: {
    DefaultButton,
  },
})
export default class ServiceCard extends Vue {
  @Prop({ default: 'IconPresentation' }) icon!: string

  @Prop({ default: 'Subject Name' }) subjectName!: string

  @Prop({ default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.' }) subjectDiscription!: string

  @Prop({ default: 'Bekijk onze dienst' }) buttonTitle!: string

  isHovering = false
}

</script>

<style module>

  .svg {
    border: 2px solid rgb(85, 128, 255);
    border-radius: 50%;
    color: rgb(85, 128, 255);
  }

  .service_card:hover .svg {
    border: 2px solid rgb(85, 128, 255);
    border-radius: 50%;
    background-color: rgb(85, 128, 255);
    color: white;
    transition: all .2s;
  }

  .button_wrapper {
    position: relative;
    top: 35px;
  }

  .service_card {
    width: 360px;
    height: 260px;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    color: black;
    box-shadow: 0 0 50px rgba(204, 204, 204, .5);
  }

  .service_card:hover {
    border: 0.1px solid rgb(85, 128, 255);
  }

  .service_card:hover .service_cta {
    border: 1px solid transparent;
    color: rgb(85, 128, 255);
  }

  .service_card h2 {
    font-family: "Poppins";
    font-size: 18px;
    margin-bottom: 10px;
  }

  .service_card p {
    font-family: "Muli";
    font-size: 14px;
    line-height: 25px;
    max-width:  300px;
    margin-bottom: 20px;
    text-align: center;
  }

 .svg {
    width: 50px;
    height: 50px;
    margin: 30px 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
