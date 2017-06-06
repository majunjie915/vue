<template>
	<div>
		<h1>{{message}}</h1>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in items">
					<img :src="item">
				</div>
			</div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button-next"></div>
        	<div class="swiper-button-prev"></div>
		</div>
	</div>
</template>

<script type="text/javascript">
	
	import Swiper from 'Swiper'
	export default {
	  name: 'list_child2',
	  data () {
	    return {
	      message: 'list_child2',
	      items: ['../../static/images/1.jpg', '../../static/images/2.jpg', '../../static/images/3.jpg', '../../static/images/4.jpg', '../../static/images/5.jpg', '../../static/images/2.jpg', '../../static/images/3.jpg', '../../static/images/4.jpg', '../../static/images/5.jpg']
	    }
	  },
	  mounted () {
	    var swiper = new Swiper('.swiper-container', {
	      pagination: '.swiper-pagination',
	      nextButton: '.swiper-button-next',
	      prevButton: '.swiper-button-prev',
	      slidesPerView: 5,
	      paginationClickable: true,
	      spaceBetween: 30
	    })
	    console.log(swiper)
	  }
	}
</script>

<style scoped="">
	@import url("../assets/css/swiper.min.css");
	h1{
		font-weight: normal;
	}
	.swiper-container {
		padding: 0 5%;
        width: 90%;
        height: 300px;
        margin: 20px auto;
        margin-bottom: 50px;
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
    .swiper-slide img{
    	width: 1.35rem;
    }
</style>

