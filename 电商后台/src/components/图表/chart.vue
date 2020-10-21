<template>
	<div id="app">
		<h2>用户分布</h2>
		<div id="nav" class="main"></div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				datatext:[
							{value:100,name:'数据1'},
							{value:200,name:'数据2'},
							{value:300,name:'数据3'},,
							{value:230,name:'数据4'},
							{value:100,name:'数据5'},
							{value:130,name:'数据6'}
						]
			}
		},
		mounted() {
			this.cret()
		},
		methods:{
			cret(){
				var myChart = this.echarts.init(document.getElementById('nav'));
				myChart.setOption({
					series:[{
						name:'数据展示',
						type:'pie',
						radius:'55%',
						roseType: 'angle',
						data:this.datatext
					}]
				})
		}
	}
}
</script>

<style lang="scss" scoped="scoped">
	#app{
		width: 100%;
		height:100%;
		position: relative;
		h2{
			width: 100%;
			text-align: center;
			margin-top: 100px;
		}
		.main{
			width: 500px;
			height:500px;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50% , -50%);
		}
	}
</style>
