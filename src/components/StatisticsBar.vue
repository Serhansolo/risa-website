<template>
  <div
      :class="$style.statistics_bar"
      v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }">
    <div :class="$style.wrapper">
      <div
        v-for="stats in statistics"
        :key="stats.id"
        :class="$style.stat_container">
        <h1 :id="stats.id" :data-count="stats.value">0</h1>
        <h2>{{ stats.task }}</h2>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import $ from 'jquery';

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
    {
      id: 'task_04',
      task: 'Party\'s given!',
      value: '4',
    },
  ]

  intersectionOptions = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    thresholds: 1.0,
  }

  countUp = (target: string) => {
    const $this = $(`h1#${target}`);
    const countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
      countNum: countTo,
    },
    {
      duration: 2000,
      easing: 'linear',
      step() {
        $this.text(Math.floor(parseInt(this.countNum, 10)));
      },
      complete() {
        $this.text(this.countNum);
      },
    });
  }

  onWaypoint({ going, direction }: any) {
    if (going === 'in') {
      this.statistics.forEach(stat => this.countUp(stat.id));
    }
  }
}

</script>

<style module>
  .statistics_bar {
    width: 100%;
    height: 400px;
    background-color: rgba(17, 29, 45);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Muli';
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

  .stat_container {
    display: flex;
    height: 100%;
    min-width: 290px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .stat_container + .stat_container {
    border-left: 0.2px solid rgba(224, 247, 252, .9);
  }

  .stat_container h1 {
    font-size: 40px;
  }

  .stat_container h2 {
    margin-top: 10px;
    font-size: 16px;
  }
</style>
