<template>
  <div class="container">
    <Header/>
    <div class="filling">
      <TeamCard
        v-for="employe in employes"
        :key="employe.id"
        :name="employe.name"
        :functionTitle="employe.functionTitle"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import TeamCard from '@/components/TeamCard.vue';

@Component({
  components: {
    Header,
    TeamCard,
  },
})
export default class Team extends Vue {
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
}
</script>
