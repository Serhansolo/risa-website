<template>
  <div class="container">
    <HomeHeader/>
    <SectionHeader
      title="Wij leveren"
      caption="zakelijke diensteverlening sinds 2006"
      description="Risa richt zich op de top 500 bedrijven en organisaties,
      die te maken hebben met grote verander ambitie.
      Deze focus vertaalt zich naar opdrachtgevers binnen verschillede branches."
    />
    <div :class="$style.wrapper">
      <CaseCard
        v-for="studie in studies"
        :title="studie.title"
        :key="studie.id"
      />
    </div>
    <div :class="$style.background_light">
      <SectionHeader
        title="13 jaar expertise"
        caption="gespecialeerd en gefocused"
        description="Door klantgerichte instelling, flexibiliteit en resultaatgerichte
        professionals zijn wij gefocussed op software ontwikkeling, testen
        en project management."
        isCentered=true
      />
      <div :class="[$style.wrapper, $style.padding_bottom]">
        <ServiceCard
          v-for="service in services"
          :key="service.id"
          :icon="service.icon"
          :subjectName="service.subjectName"
        />
      </div>
    </div>
    <ContentBlock/>

    <ContentBlock>
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
    <ContentBlock
      reverseOrder="true"
    />
    <StatisticsBar/>
    <SectionHeader
      title="Hoe onze professionals"
      caption="het ervaren binnen Risa"
      description="Onze proffessionals vormen samen binnen Risa een hecht team
      dat streeft naar de meeste goede samenwerking, eerlijkheid, respect en awesome tech.
      Lees zelf maar hoe zij Risa ervaren"
      isCentered=true
    />
    <TeamSlider/>
    <SectionHeader
      title="Showcase van de maand"
      caption="gemaaakt door one eigen techneuten"
      description="Wij geloven erin dat je als mens het beste functioneert wanneer je
      in een veilige omgeving werkt. Daarom bieden wij voor onze proffessionals een omgeving
      waar ze hun eigen ideen kunnen vertonen."
    />
    <FeaturedShowcase/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeHeader from '@/components/HomeHeader.vue';
import StatisticsBar from '@/components/StatisticsBar.vue';
import TeamCard from '@/components/TeamCard.vue';
import CaseCard from '@/components/CaseCard.vue';
import CtaBar from '@/components/CtaBar.vue';
import ServiceCard from '@/components/ServiceCard.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import TeamSlider from '@/components/TeamSlider.vue';
import FeaturedShowcase from '@/components/FeaturedShowcase.vue';
import ContentBlock from '@/components/ContentBlock.vue';

@Component({
  components: {
    HomeHeader,
    StatisticsBar,
    TeamCard,
    CaseCard,
    CtaBar,
    ServiceCard,
    SectionHeader,
    TeamSlider,
    FeaturedShowcase,
    ContentBlock,
  },
})
export default class Home extends Vue {
  studies = [
    {
      id: 'case_1',
      title: 'Financial planing case',
    },
    {
      id: 'case_2',
      title: 'Application design',
    },
    {
      id: 'case_3',
      title: 'New testing framework',
    },
  ]

  employes = [
    {
      id: 1,
      name: 'Dayan Jonker',
      functionTitle: 'Front-end Developer',
    },
    {
      id: 2,
      name: 'Peter van \'t Sand',
      functionTitle: 'Back-end Developer',
    },
    {
      id: 3,
      name: 'Alvin Vogelzang',
      functionTitle: 'Full-stack Developer',
    },
  ]

  services = [
    {
      id: 1,
      icon: 'database',
      subjectName: 'Financial Consulting',
    },
    {
      id: 2,
      icon: 'keyboard',
      subjectName: 'Risk Management',
    },
    {
      id: 3,
      icon: 'desktop',
      subjectName: 'Risk Management',
    },
  ]
}
</script>

<style module>
  .background_light {
    background-color: #F4F7FC;
  }

  .padding_bottom {
    margin-bottom: 90px !important;
  }

  .wrapper {
    width: 100%;
    max-width: 1140px;
    padding: 0 15px 100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
