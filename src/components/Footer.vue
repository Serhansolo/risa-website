<template>
  <div :class='$style.footer'>
    <div :class='$style.footer_content'>
      <div :class='[$style.contact, $style.col]'>
        <div :class='$style.logo_wrapper'>
          <img alt='Vue logo' src='../assets/logo.png'><h2>Rounding</h2>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
        <p>Email: <a href="#">info@risa-it.nl</a></p>
        <p>Call now: <a href="#">(088) - 070 08 10</a></p>
      </div>
      <div :class='[$style.important_links, $style.col]'>
        <h2>Important Links</h2>
        <li v-for='route in routes'>
          <router-link :to='route.route' tag='a'>{{ route.name }}</router-link>
        </li>
      </div>
      <div :class='[$style.latest_news, $style.col]'>
        <h2>Latest News</h2>
      </div>
      <div :class='[$style.subscribe, $style.col]'>
        <h2>Subscribe Us</h2>
      </div>
    </div>
    <div :class='$style.copywrite_block'>
      <p> &copy; 2018 <router-link to='/' tag='a'>Rounding</router-link>. All right reserved</p>
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

<style module>

.logo_wrapper {
  display: flex;
}

.logo_wrapper img {
  width: 20px;
  height: 20px;
}

.footer li {
  list-style: none;
  margin-bottom: 5px;
}

.footer h2 {
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 40px;
}

.logo_wrapper h2 {
  margin-left: 10px;
  font-size: 18px;
  font-weight: 500;
}

.footer a {
  color: white;
  text-decoration: none;
  font-family: 'Muli';
  font-size: 12px;
}

.footer p {
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  font-family: 'Muli';
}

.footer {
  width: 100%;
  height: 385px;
  background-image: url('../assets/footer_bg.png');
  background-size: contain;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.contact p:nth-of-type(1) {
  margin-bottom: 10px;
}

.contact p:nth-of-type(2),
.contact p:nth-of-type(3) {
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 14px;
}

.contact a {
  font-weight: 400;
  font-size: 14px;
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
  font-weight: 400;
}

.copywrite_block a {
  color: rgb(85, 128, 255);
  text-decoration: none;
  font-weight: 400;
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
