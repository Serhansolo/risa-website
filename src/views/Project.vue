<template>
  <div class="container">
    <Header/>
    <div class="filling">
      sjdhshdshdshdsjdhs
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';

@Component({
  components: {
    Header,
  },
})
export default class Projects extends Vue {

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
