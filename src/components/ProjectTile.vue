<template>
  <div
    :class="$style.project_tile"
    @click="transitionToProject(id)"
  >
    <img
      :src="require(`@/assets/${this.imageSrc}`)"
    />
    <div :class="$style.text_wrapper">
      <h2>{{ title }}</h2>
      <p>{{ tags }}</p>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import router from '../router';

@Component
export default class ProjectTile extends Vue {
  @Prop(String) id!: string

  @Prop({ default: 'Finacial Planning' }) title!: string

  @Prop({ default: 'Business, Finance' }) tags!: string

  @Prop({ default: 'stock_picture.jpg' }) imageSrc!: string

  transitionToProject = (id:string): void => router.push(`/projects/${id}`);
}
</script>

<style module>
  .project_tile {
    height: 400px;
    width: 555px;
    background-color: rgb(119, 119, 119);
    color: white;
    display: flex;
    align-items: flex-end;
    cursor: pointer;
  }

  .project_tile img {
    height: 400px;
    width: 555px;
    z-index: 1;
    position: absolute;
  }

  .text_wrapper {
    position: relative;
    left: 48px;
    bottom: -50px;
    transition: all .2s ease;
    z-index: 2;
  }

  .project_tile:hover .text_wrapper {
    position: relative;
    left: 48px;
    bottom: 50px;
    transition: all .2s ease;
  }

  .text_wrapper h2  {
    font-size: 18px;
    margin-bottom: 5px;
  }

  .text_wrapper p  {
    font-size: 14px;
  }
</style>
