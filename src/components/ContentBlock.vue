<template>
  <div :class="{ [$style.content_block]:true, [$style.reverse_order]:reverseOrder }">
    <div :class="$style.text_wrapper">
      <h2>Wie zijn wij</h2>
      <h2>Missie</h2>
      <p>
        Bij RISA IT staat de opdrachtgever centraal.
        Onze enthousiaste professionals vertalen uw wensen naar IT-oplossingen.
        Onze missie sluit daarbij aan: RISA IT ontzorgt haar opdrachtgevers op het gebied van IT, zodat zij zich bezig kunnen houden met de core business.
        U kunt daarbij rekenen op een ‘royal treatment’.
        Met hoogwaardige en betrouwbare IT-diensten maken wij uw IT tot onze zorg.
        Wij worden geïnspireerd door de resultaten die wij voor u behalen.
      </p>
      <h2>Aanpak</h2>
      <p>
        De professionals van RISA IT denken proactief mee met onze opdrachtgevers.
        Ze zijn betrokken en helpen op innovatieve wijze in hun bedrijfsdoelstellingen.
        Uw en onze professionals vormen samen een hecht team dat streeft naar de meest pragmatische IT-oplossing.
        Als ‘ typisch RISA IT’ noemen opdrachtgevers onze heldere manier van dienstverlening met optimale service.
        Wij voeren onze werkzaamheden dan ook altijd uit met passie voor het vak. Onze professionals deden ervaring op bij de top vijf IT-leveranciers en bepalen nu binnen RISA IT hun eigen carrière. RISA IT is zo ingericht dat wij flexibel omgaan met wensen van opdrachtgevers en snel schakelen.
        Omdat we begrijpen dat onze opdrachtgevers snel in moeten spelen op veranderingen in de markt.
      </p>
      <a>Klik hier als je meer wil weten over ons &rarr;</a>
    </div>
    <img src="">
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ContentBlock extends Vue {
  @Prop({ default: false }) reverseOrder!: boolean
}
</script>

<style module>

.content_block img {
  width: 800px;
  height: 660px;
}

.content_block h2:nth-of-type(1) {
  font-family: 'Muli';
  color: rgb(85, 128, 255);
  font-size: 24px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.content_block h2 {
  font-size: 34px;
  margin-bottom: 20px;
}

.content_block p {
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 24px;
}

.content_block a {
  margin-top: 10px;
  color: rgb(85, 128, 255);
  cursor: pointer;
}

.content_block a:hover  {
  text-decoration: underline;
}

.content_block {
  display: flex;
  color: black;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 100px;
}

.reverse_order {
  flex-direction: row-reverse;
}

.text_wrapper {
  max-width: 600px;
}

</style>
