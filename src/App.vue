<template>
  <div id="app">
    <MainMenu/>
    <router-view/>
    <div class="filling">
      <ServiceCard
        v-for="service in services"
        :icon="service.icon"
        :subjectName="service.subjectName"
      />
    </div>
    <StatisticsBar/>
    <div class="filling">
      <TeamCard
        v-for="employe in employes"
        :name="employe.name"
        :functionTitle="employe.functionTitle"
      />
    </div>
    <CtaBar/>
    <div class="filling">
      <CaseCard
        v-for="studie in studies"
        :title="studie.title"
        :key="studie.id"
      />
    </div>
    <PartnerBar/>
    <Footer/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import MainMenu from '@/components/MainMenu.vue';
import Footer from '@/components/Footer.vue';
import ServiceCard from '@/components/ServiceCard.vue';
import PartnerBar from '@/components/PartnerBar.vue';
import Header from '@/components/Header.vue';
import StatisticsBar from '@/components/StatisticsBar.vue';
import TeamCard from '@/components/TeamCard.vue';
import CaseCard from '@/components/CaseCard.vue';
import CtaBar from '@/components/CtaBar.vue';

@Component({
  components: {
    MainMenu,
    Footer,
    ServiceCard,
    PartnerBar,
    Header,
    StatisticsBar,
    TeamCard,
    CaseCard,
    CtaBar,
  },
})
export default class App extends Vue {
employes = [
  {
    name: 'Dayan Jonker',
    functionTitle: 'Front-end Developer',
  },
  {
    name: 'Peter van \'t Sand',
    functionTitle: 'Back-end Developer',
  },
  {
    name: 'Alvin Vogelzang',
    functionTitle: 'Full-stack Developer',
  },
]

services = [
  {
    icon: 'IconPresentation',
    subjectName: 'Financial Consulting',
  },
  {
    icon: 'IconWorker',
    subjectName: 'Risk Management',
  },
  {
    icon: 'IconWorker',
    subjectName: 'Risk Management',
  },
  {
    icon: 'IconWorker',
    subjectName: 'Risk Management',
  },
]

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


}
</script>

<style>
  @font-face {
    font-family: "Muli";
    src: url("/assets/fonts/Multi-Regular.ttf").format("truetype"),
         url("/assets/typo/Multi-Regular.ttf").format("truetype");
  }

  @font-face {
    font-family: "Poppins";
      src:  url("/assets/fonts/Poppins-Regular.ttf").format("truetype"),
            url("/assets/typo/Poppins-Regular.ttf").format("truetype");
  }

  body, html {
    margin: 0;
    color: rgb(254, 254, 254);
    font-family: "Poppins";
  }

  h1, h2, html, body, p {
    margin: 0;
    padding: 0;
  }

  .filling {
    width: 100%;
    Height : 500px;
    max-width: 1140px;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
