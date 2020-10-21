<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		mounted() {
			if(this.text.a == undefined){
				console.log(this.text.a)
				this.$router.push('/login')
			}
			
		}
	}
</script>

<style lang="scss">

</style>
