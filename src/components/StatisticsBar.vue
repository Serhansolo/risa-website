<template>
  <div :class="$style.statistics_bar">
    <div :class="$style.wrapper">
      <div
        v-for="stats in statistics"
        :class="$style.test">
        <h1 :id="stats.id" :data-count="stats.value">0</h1>
        <h2>{{ stats.task }}</h2>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class StatisticsBar extends Vue {

  statistics = [
    {
      id: 'task_01',
      task: 'Test Completed',
      value: '300',
    },
    {
      id: 'task_02',
      task: 'Applications Running',
      value: '123',
    },
    {
      id: 'task_03',
      task: 'Data Uploaded',
      value: '1364',
    },
  ]


  countUp(target: string) {

    var $this = $(`h1#${target}`);
    var countTo = $this.attr('data-count');

    $({countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 2000,
      easing: 'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
      }
    });
  }

  mounted() {
    this.statistics.forEach((stat) => this.countUp(stat.id))
  }

}

</script>

<style module>
  .statistics_bar {
    width: 100%;
    height: 320px;
    background-color: rgba(17, 29, 45);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrapper {
    max-width: 1170px;
    padding: 0 45px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .test {
    display: flex;
    height: 100%;
    min-width: 250px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .test + .test {
    border-left: 0.2px solid rgba(224, 247, 252, .9);
  }

  .test h2 {
    margin-top: 10px;
    font-family: 'Muli';
    font-size: 14px;
  }
</style>
