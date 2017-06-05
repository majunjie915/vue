<template>
	<div class="activity">
		<nav>{{message}}</nav>
		<ul class="programList">
			<li v-for="item in data.list">
				<div class="left"><img :src="item.portrait_id"></div>
				<div class="right">
					<p class="first">{{item.title}}</p>
					<p class="second">{{item.scenes[0].start_time}}</p>
					<p class="third">{{item.scenes[0].venue.name}}</p>
					<p class="forth" v-if="item.scenes[0].lowest_price !== '0'"><span>￥</span><span class="price">{{item.scenes[0].lowest_price}}</span><span>起</span></p>
					<p class="forth price" v-else>可预约</p>
				</div>
			</li>
		</ul>
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
	.programList{
		text-align: left;
		padding: 0 0.3rem;
		margin-bottom: 50px;
	}
	.programList li{
		margin-top: 0.1rem;
		width: 100%;
		display: flex;
	}
	.programList img {
		width: 1.7rem;
		margin-right: 0.2rem;
		border-radius: 4px;
	}
	.programList .right{
		border-bottom: solid 1px #eee;
		padding-bottom: 0.2rem;
		width: 4.7rem;
	}
	.programList .right p{
		margin: 0;
	}
	.programList .right .first{
		font-size: 0.3rem;
		color: #262626;
		height: 0.95rem;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -wibkit-box;
		-wibkit-line-clamp: 2;
		-wibkit-box-orient: vertical;
	}
	.programList .right .second{
		color: #999;
		margin: 0.14rem 0;
		font-size: 0.22rem;
		padding-left: 0.38rem;
		background: url(../assets/images/icon_index_time.png) 0 0 no-repeat;
		background-size: 0.24rem;
	}
	.programList .right .third{
		color: #999;
		margin-bottom: 0.1rem;
		font-size: 0.22rem;
		padding-left: 0.38rem;
		background: url(../assets/images/addressIndex.png) 0 0.03rem no-repeat;
		background-size: 0.24rem;
	}
	.programList .right .forth{
		color: #5d5d5d;
		font-size: 0.22rem;
	}
	.programList .right .forth .price{
		margin: 0 9px;
		color: #ff7946;
		font-size: 0.34rem;
		margin-top: 8px;
	}
	.programList .right .price{
		color: #ff7946;
	}
	.activity{
		font-size: 0.16rem;
	}
	nav{
		background: #e2e2e2;
		height: 0.6rem;
		line-height: 0.6rem;
		font-size: 0.34rem;
		font-weight: bold;
	}
	h1, h2 {
		font-weight: normal;
	}
	ul{
		list-style: none;
		padding: 0;
	}
	.footer li{
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
	    var url = '../../static/js/a.json'
	    var _self = this
	    $.ajax({
	      url: url,
	      type: 'get',
	      dataType: 'json',
	      data: '',
	      success: function (res) {
	        _self.data = {
	          list: res.data.programs
	        }
	        console.log(_self.data)
	      }
	    })
	  },
	  activated: function () {
	    if ($('.price') === '0') {
	      $('.forth').html('可预约')
	    }
	    console.log($('.price'))
	  }
	}
</script>
