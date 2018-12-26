<template>
  <div :class="$style.team_card">
    <img
      :src="require(`@/assets/${this.imageSrc}`)"
    />
    <div :class="$style.tumbnail">
    	<h1>{{ name }}</h1>
      <h2>{{ functionTitle }}</h2>
      <div :class="$style.social">

        <!-- FIX ME: fix the linked in icon  -->
        <BaseIcon>
          <IconLinked/>
        </BaseIcon>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import BaseIcon from '@/components/BaseIcon.vue';
import IconLinked from '@/components/icons/IconLinked.vue';

@Component({
  components: {
    BaseIcon,
    IconLinked,
  },
})
export default class TeamCard extends Vue {
  @Prop({ default: 'Name Employe' }) name!: string

  @Prop({ default: 'Function title' }) functionTitle!: string

  @Prop({ default: 'obama.jpg' }) imageSrc!: string

}


</script>

<style module>
  .team_card {
    height: 400px;
    width: 360px;
    background-color: rgb(119, 119, 119);
    background-size: cover;
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    overflow: hidden;
  }

  .team_card img {
    height: 400px;
    width: 360px;
    position: absolute;
  }

  .tumbnail {
    width: 100%;
    min-height: 160px;
    margin: 0 10px 10px;
    background: rgb(255, 255, 255, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    top: 200px;
    transition: all .2s ease;
    color: black;
    z-index: 2;
  }

  .tumbnail h1 {
    font-size: 22px;
    margin: 22px 0 10px;
  }

  .tumbnail h2 {
    font-size: 18px;
    font-family: 'Muli';
    font-weight: 400;
    margin-bottom: 10px;
  }

  .team_card:hover .tumbnail {
    top: 0;
    transition: all .2s ease-in-out;
  }

  .social {
    width: 50px;
    display: flex;
    justify-content: center;
    padding-top: 10px;
    margin-top: 10px;
    border-top: 0.2px solid black;
  }

  .social svg:hover g {
    fill: #0077B5;
  }

</style>
