<template>
  <div class="home">
    <nav>
      {{ msg }}
    </nav>

    <div class="swiper-container swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/active_1_b.png">
        </div>
        <div class="swiper-slide">
          <img src="../assets/active_2_b.png">
        </div>
        <div class="swiper-slide">
          <img src="../assets/active_3_b.png">
        </div>
        <div class="swiper-slide">
          <img src="../assets/active_4_b.png">
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <!-- Add Arrows -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>

    <ol class="home_todo">
      <li v-for="todo in todos">
        {{todo.test}}
      </li>
    </ol>
    <router-link to="/home_detail">home_detail</router-link>
    <p>{{message}}</p>
    <button v-on:click="reverseMessage">reverse</button>
    <ul class="footer">
      <li><router-link to="/home" class="home_index">首页</router-link></li>
      <li><router-link to="/list">演出</router-link></li>
      <li><router-link to="/activity">活动</router-link></li>
      <li><router-link to="/mine">我的</router-link></li>
    </ul>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("../assets/swiper.min.css");
  .home{
    font-size: 0.16rem;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  .footer li {
    display: inline-block;
    margin: 0 8%;
  }

  a {
    color: #42b983;
  }
  nav{
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    background: #e4e3e4;
    font-weight: bold;
    font-size: 0.26rem;
  }
  ol li{
    text-align: left;
  }
  .home_index{
  	color: red;
  }
  .footer{
  	background: #ccc;
  	width: 100%;
  	height: 0.5rem;
  	line-height: 0.5rem;
  	position: fixed;
  	bottom: 0;
  	left: 0;
  	margin-bottom: 0;
  }
  .swiper-container {
      width: 100%;
      height: 100%;
      
  }
  .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
      
      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
  }
</style>

<script>
import $ from 'jquery'
import Swiper from 'Swiper'
let swiper
export default {
  name: 'home',
  data () {
    return {
      msg: '项目首页',
      todos: [
        {test: '学习javascript'},
        {test: '学习vue'},
        {test: '整个牛项目'}
      ],
      message: 'Hello vue !'
    }
  },
  mounted () {
    swiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      paginationClickable: true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: 2500,
      autoplayDisableOnInteraction: false
    })
    console.log(swiper)
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
      console.log($('.home_index').html())
    }
  }
}
</script>

