<template>
  <div class="home">
    <nav>{{ msg }}</nav>
    <ol class="home_todo">
      <li v-for="todo in todos">
        {{todo.test}}
      </li>
    </ol>
    <router-link to="/home_detail">home_detail</router-link>
    <p v-on:click="reverseMessage">{{message}}</p>
    <ul class="footer">
      <li><router-link to="/home" class="home_index">首页</router-link></li>
      <li><router-link to="/list">演出</router-link></li>
      <li><router-link to="/activity">活动</router-link></li>
      <li><router-link to="/mine">我的</router-link></li>
    </ul>
  </div>
</template>

<script>
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
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
