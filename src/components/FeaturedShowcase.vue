<template>
  <div :class="$style.show_case">
    <img src="">
    <div :class="$style.text_wrapper">
      <p>
        Bij RISA IT staat de opdrachtgever centraal.
        Onze enthousiaste professionals vertalen uw wensen naar IT-oplossingen.
        Onze missie sluit daarbij aan: RISA IT ontzorgt haar opdrachtgevers op het gebied van IT, zodat zij zich bezig kunnen houden met de core business.
        U kunt daarbij rekenen op een ‘royal treatment’.
        Met hoogwaardige en betrouwbare IT-diensten maken wij uw IT tot onze zorg.
        Wij worden geïnspireerd door de resultaten die wij voor u behalen.
      </p>
      <div :class="$style.dev_card">
        <h2>Dayan Jonker</h2>
        <a>Frontend developer</a>
        <div :class="$style.social_icons">
          <v-icon name="github"/>
        </div>
      </div>
    </div>
    <DefaultButton
      isFilled=true
      title="Beskijk de details van deze showcase"
    />
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
export default class FeaturedShowcase extends Vue {
}

</script>

<style module>
.social_icons {
  color: black;
  width: 200px;
  margin-top: 20px;
  border-top: 1px solid black;
  padding-top: 10px;
  display: flex;
  justify-content: center;
}

.dev_card {
  height: 200px;
  width: 450px;
  border-radius: 5px;
  box-shadow: 0 0 50px rgba(204, 204, 204, .5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
}

.dev_card a {
  margin-top: 5px;
  color: rgb(85, 128, 255);
  font-size: 14px;
}

.dev_card h2 {
  font-size: 18px;
}

.show_case img {
  height: 250px;
  width: 100%;
  margin-bottom: 20px;
}

.show_case p {
  color: black;
}

.show_case {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1140px;
  margin: 0 auto 90px;
}

.text_wrapper {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.text_wrapper p {
  max-width: 50%;
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 24px;
}

</style>
