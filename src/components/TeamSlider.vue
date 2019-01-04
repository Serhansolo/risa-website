<template>
  <div :class="[$style.wrapper, $style.padding_bottom]">
    <div :class="$style.team_section">
      <img :src="require(`@/assets/${currentTeamMember.avatar}`)">
      <div :class="$style.text_wrapper">
        <p> {{ currentTeamMember.description}}</p>
        <h2>{{ currentTeamMember.name }}</h2>
        <a>{{ currentTeamMember.title }}</a>
        <div :class="$style.team_nav">
          <p @click="previousMember"><v-icon name="long-arrow-alt-left"/></p>
          <p @click="nextMember"><v-icon name="long-arrow-alt-right"/></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class TeamSlider extends Vue {

  teamMembers = [
    {
      name: 'Freek Kaaseter',
      title: 'Backend developer',
      description: `Bij RISA IT staat de opdrachtgever centraal.
      Onze enthousiaste professionals vertalen uw wensen naar IT-oplossingen.
      Onze missie sluit daarbij aan: RISA IT ontzorgt haar opdrachtgevers op het gebied van IT, zodat zij zich bezig kunnen houden met de core business.
      U kunt daarbij rekenen op een ‘royal treatment’.
      Met hoogwaardige en betrouwbare IT-diensten maken wij uw IT tot onze zorg.
      Wij worden geïnspireerd door de resultaten die wij voor u behalen.`,
      avatar: 'stock_picture.jpg',
    },
    {
      name: 'Dayan Jonker',
      title: 'Frontend webdeveloper',
      description: `De professionals van RISA IT denken proactief mee met onze opdrachtgevers.
      Ze zijn betrokken en helpen op innovatieve wijze in hun bedrijfsdoelstellingen.
      Uw en onze professionals vormen samen een hecht team dat streeft naar de meest pragmatische IT-oplossing.
      Als ‘ typisch RISA IT’ noemen opdrachtgevers onze heldere manier van dienstverlening met optimale service.
      Wij voeren onze werkzaamheden dan ook altijd uit met passie voor het vak. Onze professionals deden ervaring op bij de top vijf IT-leveranciers en bepalen nu binnen RISA IT hun eigen carrière. RISA IT is zo ingericht dat wij flexibel omgaan met wensen van opdrachtgevers en snel schakelen.
      Omdat we begrijpen dat onze opdrachtgevers snel in moeten spelen op veranderingen in de markt.`,
      avatar: 'obama.jpg',
    },
    {
      name: 'Serhan Starwars',
      title: 'Fullstack webdeveloper',
      description: `Door klantgerichte instelling, flexibiliteit en resultaatgerichte
      professionals zijn wij gefocussed op software ontwikkeling, testen
      en project management. Door klantgerichte instelling, flexibiliteit en resultaatgerichte
      professionals zijn wij gefocussed op software ontwikkeling, testen
      en project management`,
      avatar: 'obama.jpg',
    },
  ]

  currentIndex = 0
  get currentTeamMember() {
    return this.teamMembers[this.currentIndex];
  }

  nextMember(): number {
    if  (this.teamMembers.length === this.currentIndex + 1 ) {
      return this.currentIndex = 0;
    }

    return this.currentIndex = this.currentIndex + 1;
  };

  previousMember(): number {
    if  (this.currentIndex === 0) {
      return this.currentIndex = this.teamMembers.length - 1;
    }

    return this.currentIndex = this.currentIndex - 1;
  };
}

</script>

<style module>
.wrapper {
  width: 100%;
  max-width: 1140px;
  padding: 0 15px 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.team_nav {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 120px;
}

.team_nav p {
  font-size: 20px;
  padding: 6px 16px;
  border: 1px solid rgba(0, 0, 0, .5);
  cursor: pointer;
  user-select: none;
  transition: all .2s;
  display: flex;
}

.team_nav p:hover {
  background: rgb(85, 128, 255);
  border: 1px solid rgb(85, 128, 255);
  color: white;
  transition: all .2s;
}

.team_section img {
  width: 360px;
  height: 380px;
}

.team_section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.text_wrapper {
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 35px;
  min-height: 400px;
}

.text_wrapper a {
  margin-top: 5px;
  color: rgb(85, 128, 255);
  font-size: 14px;
}

.text_wrapper h2 {
  font-size: 18px;
}

.text_wrapper p {
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 24px;
}

</style>
