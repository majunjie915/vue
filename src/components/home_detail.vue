<template>
	<div class="home_detail">
		<nav>
	        <a href="javascript:history.back()"><img src="../assets/images/back2x.png" class="backImg"></a>
	        节目详情页
	    </nav>
	    <div class="container"></div>
		<h1>{{message}}</h1>
	</div>
</template>

<style scoped="">
	.home_detail{
		font-size: 0.16rem;
	}
	h1{
		font-weight: normal;
	}
	nav{
	    width: 100%;
	    height: 0.5rem;
	    line-height: 0.5rem;
	    background: #e4e3e4;
	    font-weight: bold;
	    font-size: 0.26rem;
	}
    .backImg{
	    width: 0.35rem;
	    position: absolute;
	    top: 0.08rem;
	    left: 0.2rem;
    }
</style>

<script type="text/javascript">
	import $ from 'jquery'
	export default {
	  name: 'home_detail',
	  data () {
	    return {
	      message: 'home_detail'
	    }
	  },
	  mounted () {
	    $('.container').html('<p style="text-align: center;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ofo轻睐北京演唱会孙燕姿邀你共享音乐</p>')
	  },
	  methods: {

	  }
	}
</script>
