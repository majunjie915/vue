<template>
	<div class="main">
		<h1>{{message}}</h1>
		<div id="main" style="width: 600px;height: 400px;"></div>
		<div id="main2" style="width: 600px;height: 400px;"></div>
		<div id="main3" style="width: 600px;height: 400px;"></div>
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
	import echarts from 'echarts'
	import $ from 'jquery'
	export default {
	    name: 'main',
	    data () {
		    return {
		      message: '项目我的'
		    }
	    },
	    mounted() {
			// 基于准备好的dom，初始化echarts实例
			var myChart = echarts.init(document.getElementById('main'));
			// 绘制图表
			myChart.setOption({
			    title: { text: 'ECharts 入门示例' },
			    tooltip: {},
			    xAxis: {
			        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
			    },
			    yAxis: {},
			    series: [{
			        name: '销量',
			        type: 'bar',
			        data: [5, 20, 36, 10, 10, 20]
			    }]
			});

			var myChart2 = echarts.init(document.getElementById("main2"));
			myChart2.setOption({
				title: {
					text: '饼状图'
				},
				// backgroundColor: '#2c343c',
				textStyle: {
					color: 'rgba(225,225,225,0.3)'
				},
				legend: {
					data: ['视频广告','联盟广告','邮件营销','直接访问','搜索引擎']
				},
				series: [{
					name: '访问来源',
					type: 'pie',
					redius: '55%',
					data: [
						{value:235,name:'视频广告'},
						{value:274, name:'联盟广告'},
						{value:310, name:'邮件营销'},
						{value:335, name:'直接访问'},
						{value:400, name:'搜索引擎'}
					]
				}],
				roseType: 'angle',
				itemStyle:{
					normal: {
						shadowBlur: 200,
						shadowOffsetX: 0,
						shadowOffsetY: 0,
						shadowColor: 'rgba(0,0,0,0.5)',
						color: '#c23531'
					},
					emphasis: {
						shadowBlur: 200,
						shadowColor: 'rgba(0,0,0,0,5)'
					}				
				},
				visualMap: {
					show: false,
					min: 80,
					max: 600,
					inRange: {
						colorLightness: [0, 1]
					}
				}
			})

			var myChart3 = echarts.init(document.getElementById("main3"));
			$.get("static/js/data.json").done(function(res){
				myChart3.setOption({
					title: {
						text: res.data.title
					},
					tooltip: {},
					legend: {
						data: res.data.legend
					},
					xAxis: {
						data: res.data.categories
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: res.data.data
					}]
				})
			})
	   }
	}
</script>

<style scoped="">
	.main{
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
	div{
		margin-bottom: 50px;
	}
</style>
