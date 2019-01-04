<template>
  <div class="container">
    <Header/>
    <div class="filling">
      <ProjectTile
        v-for="project in projects"
        :id="project.id"
        :key="project.id"
        :title="project.title"
        :tags="project.tags"
      />

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import ProjectTile from '@/components/ProjectTile.vue';

@Component({
  components: {
    Header,
    ProjectTile,
  },
})
export default class Projects extends Vue {
  projects = [
    {
      id: 'finacial-planning',
      title: 'Finacial Planning',
      tags: 'Business, Finance',
    },
    {
      id: 'native-app-development',
      title: 'Native App Development',
      tags: 'Native, Development',
    },
  ]
}
</script>

<style>
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
