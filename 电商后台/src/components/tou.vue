<template>
	<div class="top">
		<!-- <h1><span v-text="url1"></span>{{url2}}</h1> -->
		<img :src="imgsrc" alt="">
	</div>
</template>

<script>
	export default {
		data(){
			// props:['url1','url2']
			return {
				// url1:'1/',
				// url2:2,
				imgsrc:'https://elm.cangdu.org/img/default.jpg',
			}
		},
		computed:{

		},
		mounted(){
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
	.top{
		width: 100%;
		height:60px;
		background-color: #eff2f7;
		
		h1{
			float: left;
			line-height: 60px;
			font-size: 16px;
			font-weight: 400;
			margin-left: 26px;
			color: #97a8be;
			
			span{
				color: #4b4949;
			}
		}
		
		img{
			width: 40px;
			height: 40px;
			border-radius: 50%;
			float: right;
			margin-top: 10px;
			margin-right:16px ;
		}
	}
</style>
