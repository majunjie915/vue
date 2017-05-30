<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <router-link to="/home_detail">home_detail</router-link>
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
      msg: '项目首页'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 8%;
}

a {
  color: #42b983;
}
.home_index{
	color: red;
}
.footer{
	background: #ccc;
	width: 100%;
	height: 50px;
	line-height: 50px;
	position: fixed;
	bottom: 0;
	left: 0;
	margin-bottom: 0;
}
</style>
