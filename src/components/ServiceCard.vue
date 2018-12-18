<template>
  <div :class="$style.service_card"
    @mouseover="isHovering=true"
    @mouseout="isHovering=false"
  >
    <div :class="$style.svg">
      <BaseIcon :iconColor="isHovering ? '#5580FF' : '#000000'" width="42" height="43" iconName="test">
        <component :is="icon"/>
      </BaseIcon>
    </div>

    <h2>Market Research</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
    <div :class="$style.service_cta">Details</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

import BaseIcon from "@/components/BaseIcon.vue";
import IconWorker from "@/components/icons/IconWorker.vue";
import IconPresentation from "@/components/icons/IconPresentation.vue";

@Component({
  components: {
    BaseIcon,
    IconWorker,
    IconPresentation,
  },
})
export default class ServiceCard extends Vue {
  @Prop(String) icon!: string

  isHovering = false
}

</script>

<style module>

  .service_card {
    width: 210px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.1px solid transparent;
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
    font-size: 14px;
    margin-bottom: 10px;
  }

  .service_card p {
    font-family: "Muli";
    font-size: 12px;
    line-height: 20px;
    color: black;
    max-width: 190px;
    margin-bottom: 20px;
    text-align: center;
  }

 .svg {
    width: 40px;
    height: 40px;
    margin: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .service_cta {
    width: 100%;
    padding: 12px 0;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    font-family: "Muli";
    font-size: 12px;
  }

  .service_card h2 {
    color: black;
    max-width: 180px;
  }

</style>
