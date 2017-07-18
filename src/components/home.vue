<template>
  <div class="home">
    <nav>
      {{ msg }}
    </nav>

    <div class="swiper-container swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/images/active_1_b.png">
        </div>
        <div class="swiper-slide">
          <img src="../assets/images/active_2_b.png">
        </div>
        <div class="swiper-slide">
          <img src="../assets/images/active_3_b.png">
        </div>
        <div class="swiper-slide">
          <img src="../assets/images/active_4_b.png">
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <!-- Add Arrows -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>

    <ol class="home_todo">
      <li v-for="(todo, index) in todos" :id="index">
        <p v-on:click="showContent($event)">{{todo.test}}</p>
        <!-- <div>{{todo.content}}</div> -->
      </li>
    </ol>
    <ul class="home_todo_content">
      <li v-for="(todo, index) in todos" :id="index">{{todo.content}}</li>
    </ul>
    <router-link to="/home_detail">home_detail</router-link>
    <p>{{message}}</p>
    <button v-on:click="reverseMessage">reverse</button>
    <ul class="footer">
      <li><router-link to="/home" class="home_index">首页</router-link></li>
      <li><router-link to="/list">演出</router-link></li>
      <li><router-link to="/activity">活动</router-link></li>
      <li><router-link to="/mine">我的</router-link></li>
    </ul>
    <div class="blank60"></div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("../assets/css/swiper.min.css");
  .home_todo_content{
    width: 80%;
    height: 3rem;
    border: thin inset #eee;
    margin-left: 10%;
    text-align: left;
  }
  .home_todo_content li{
    width: 80%;
    height: 3rem;
    margin: 3%;
    display: none;
  }
  .checked{
    border-bottom: solid 2px #ff7946;
  }
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
  .blank60{
    height: 0.6rem;
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
  .home_todo{
    /*margin-left: 10%;*/
    display: flex;
    justify-content: space-around;
    padding: 0;
  }
  .home_todo li p{
    cursor: pointer;
    /*padding-bottom: 0.1rem;*/
    display: inline-block;
    margin: 0 0 0.1rem 0;
  }
  .home_todo li div{
    display: none;
    position: relative;
    width: 5rem;
    height: 2rem;
    border: solid 1px;
    padding-left: 3%;
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
        {test: '学习javascript', content: "学习javascript是学习vue的基础"},
        {test: '学习vue', content: "框架是个好东西，能为我们前端开发节省很多麻烦事"},
        {test: '整个牛项目', content: "学习好vue整出一个属于自己的项目"}
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
    $(".home_todo li:first p").addClass("checked");
    $(".home_todo li:first div").css("display", "block");
    $(".home_todo_content li:first").show();
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    },
    showContent: function($event){
      $($event.target).addClass("checked").closest("li").siblings().find("p").removeClass("checked");

      $($event.target).siblings("div").show().closest("li").siblings().find("div").hide();

      $(".home_todo_content li").each(function(){
        if($(this).prop("id") == $($event.target).closest("li").prop("id")){
          $(this).show().siblings().hide();
        }
      })
    }
  }
}
</script>

