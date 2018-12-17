<template>
  <div class='footer'>
    <div class='footer_content'>
      <div class='contact col'>
        <h2>RISA - IT</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        <p>info@risa-it.nl</p>
        <p>088 - 070 08 10</p>
      </div>
      <div class='important_links col'>
        <h2>Important Links</h2>
        <li v-for='route in routes'>
          <router-link :to='route.route' tag='a'>{{ route.name }}</router-link>
        </li>
      </div>
      <div class='latest_news, col'>
        <h2>Latest News</h2>
      </div>
      <div class='subscribe, col'>
        <h2>Subscribe Us</h2>
      </div>
    </div>

    <div class="copywrite_block">
      <p> &copy; 2018 <router-link to='/home' tag='a'>RISA-IT</router-link>. All right reserved</p>
    </div>
  </div>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
routes = [
  {
    route: '/',
    name: 'Home'
  },
  {
    route: '/team',
    name: 'Team'
  },
  {
    route: '/about',
    name: 'About'
  }
]


}

</script>

<style scoped>

.footer h2 {
  font-size: 16px;
  font-weight: bold;

}

.footer li {
  list-style: none;
}

.footer a {
  color: rgb(85, 128, 255);
  text-decoration: none;
  font-weight: bold;
}

.footer p {
  font-size: 14px;
}

.footer {
  width: 100%;
  height: 385px;
  background-color: rgb(16, 31, 34);
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.copywrite_block {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 0.2px solid rgba(224, 247, 252, .9);
}

.copywrite_block p {
  font-size: 12px;
}

.copywrite_block a {
  color: rgb(85, 128, 255);
  text-decoration: none;
  font-weight: bold;
}

.footer_content {
  display: flex;
  flex-direction: row;
  max-width: 800px;
  margin: 50px auto;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
}

.col {
  max-width: 200px;
}

.contact {
  display: block;
}

</style>
