<template>
	<div>
		<h1>{{message}}</h1>
		<ul class="footer">
			<li>
				<router-link to="/home">首页</router-link>
			</li>
			<li>
				<router-link to="/list">演出</router-link>
			</li>
			<li>
				<router-link to="/activity">活动</router-link>
			</li>
			<li>
				<router-link to="/main" class="main_index">我的</router-link>
			</li>
		</ul>		
	</div>
</template>

<script type="text/javascript">
	export default {
	  name: 'main',
	  data () {
	    return {
	      message: '项目我的'
	    }
	  }
	}
</script>

<style scoped="">
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
	.main_index{
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
