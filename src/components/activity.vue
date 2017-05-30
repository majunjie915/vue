<template>
	<div class="activity">
		<h1>{{message}}</h1>
		<ul>
			<li>
				<router-link to="/home">首页</router-link>
			</li>
			<li>
				<router-link to="/list">演出</router-link>
			</li>
			<li>
				<router-link to="/activity" class="activity_index">活动</router-link>
			</li>
			<li>
				<router-link to="/main">我的</router-link>
			</li>
		</ul>		
	</div>
</template>

<script type="text/javascript">
	export default {
	  name: 'activity',
	  data () {
	    return {
	      message: '项目活动'
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
		margin: 0 10px;
	}
	a{
		color: #42b983;
	}
	.activity_index{
		color: red;
	}
</style>
