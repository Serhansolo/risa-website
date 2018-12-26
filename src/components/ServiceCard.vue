<template>
  <div :class="$style.service_card"
    @mouseover="isHovering=true"
    @mouseout="isHovering=false"
  >
    <div :class="$style.svg">
      <BaseIcon :iconColor="isHovering ? '#5580FF' : '#000000'" width="42" height="43">
        <component :is="icon"/>
      </BaseIcon>
    </div>

    <h2>{{ subjectName }}</h2>
    <p>{{ subjectDiscription }}</p>
    <div :class="$style.service_cta">Details</div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';

import BaseIcon from '@/components/BaseIcon.vue';
import IconWorker from '@/components/icons/IconWorker.vue';
import IconPresentation from '@/components/icons/IconPresentation.vue';

@Component({
  components: {
    BaseIcon,
    IconWorker,
    IconPresentation,
  },
})
export default class ServiceCard extends Vue {
  @Prop({ default: 'IconPresentation' }) icon!: string

  @Prop({ default: 'Subject Name' }) subjectName!: string

  @Prop({ default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.' }) subjectDiscription!: string

  isHovering = false
}

</script>

<style module>

  .service_card {
    width: 260px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.1px solid transparent;
    color: black;
  }

  .service_card:hover {
    border: 0.1px solid rgb(85, 128, 255);
  }

  .service_card:hover .service_cta {
    border: 1px solid transparent;
    color: rgb(85, 128, 255);
  }

  .service_card svg {
    width: 50px;
    height: 50px;
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
    max-width: 190px;
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

  .service_cta {
    width: 100%;
    padding: 18px 0;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    font-family: "Muli";
    font-size: 12px;
  }

</style>
