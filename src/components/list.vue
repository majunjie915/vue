<template>
	<div class="list">
		<h1>{{message}}</h1>
		<ul>
			<li>
				<router-link to="/list/list_child1">list_child1</router-link>
			</li>
			<li>
				<router-link to="/list/list_child2">list_child2</router-link>
			</li>
		</ul>
		<ul class="footer">
			<li>
				<router-link to="/home">首页</router-link>
			</li>
			<li>
				<router-link to="/list" class="list_index">演出</router-link>
			</li>
			<li>
				<router-link to="/activity">活动</router-link>
			</li>
			<li>
				<router-link to="/main">我的</router-link>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      message: '项目列表'
    }
  }
}
</script>

<style scoped>
	.list{
		font-size: 0.16rem;
	}
	h1, h2 {
		font-weight: normal;
	}
	ul{
		list-style: none;
		padding: 0;
	}
	li{
		display: inline-block;
		margin: 0 8%;
	}
	a{
		color: #42b983;
	}
	.list_index{
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
