<template>
	<div class="activity">
		<h1>{{message}}</h1>
		<ul class="footer">
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

<style scoped="">
	.activity{
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
	.activity_index{
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

<script type="text/javascript">
	import $ from 'jquery'
	export default {
	  name: 'activity',
	  data () {
	    return {
	      message: '项目活动',
	      data: ''
	    }
	  },
	  mounted: function () {
	    var url = '../assets/a.json'
	    var _self = this
	    $.ajax({
	      url: url,
	      type: 'get',
	      dataType: 'json',
	      data: _self.data,
	      success: function (res) {
	        console.log(res)
	      }
	    })
	  }
	}
</script>
