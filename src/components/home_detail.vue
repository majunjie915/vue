<template>
	<div class="home_detail">
		<h1>{{message}}</h1>
	</div>
</template>

<script type="text/javascript">
	export default {
	  name: 'home_detail',
	  data () {
	    return {
	      message: 'home_detail'
	    }
	  }
	}
</script>

<style scoped="">
	h1{
		font-weight: normal;
	}
</style>
