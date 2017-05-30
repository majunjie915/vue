<template>
	<div>
		<h1>{{message}}</h1>
	</div>
</template>

<script type="text/javascript">
	export default {
	  name: 'list_child1',
	  data () {
	    return {
	      message: 'list_child1'
	    }
	  }
	}
</script>

<style scoped="">
	h1{
		font-weight: normal;
	}
</style>
