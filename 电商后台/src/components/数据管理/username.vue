<template>
	<div id="app">
			<div class="main">
				<div class="top">
					<h3>#</h3>
					<h3>注册日期</h3>
					<h3>用户姓名	</h3>
					<h3>注册地址</h3>
				</div>
				<div class="mains">
					<div class="top1" v-for="data in userdata">
						<h3 v-text="data.id"></h3>
						<h3 v-text="data.day"></h3>
						<h3 v-text="data.name"></h3>
						<h3 v-text="data.dizhi"></h3>
					</div>
				</div>
			</div>
			
	</div>
</template>

<script>
	export default {
		data(){
			return {
				imgsrc:'https://elm.cangdu.org/img/default.jpg',
				userdata:[
					{
						id:'1',
						day:'2020-12-3',
						name:'大王',
						dizhi:'我家'
					},
					{
						id:'1',
						day:'2020-12-3',
						name:'大王',
						dizhi:'我家'
					},
					{
						id:'1',
						day:'2020-12-3',
						name:'大王',
						dizhi:'我家'
					},
					{
						id:'1',
						day:'2020-12-3',
						name:'大王',
						dizhi:'我家'
					},
				]
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
#app{
	width: 96%;
	height:100%;
	margin: 0 auto;
	margin-top: 30px;
	
	.main{
		width: 100%;
		height:100%;
		
		.top{
			border: solid 1px #edebeb;
			min-width: 400px;
			overflow: hidden;
			width: 100%;
			height:40px;
			background-color: #eef1f6;
			
			h3{
				display: block;
				width: 100px;
				height:100%;
				text-align: left;
				float: left;
				line-height: 40px;
				margin-left: 50px;
				font-size: 14px;
				font-weight: 600;
			}
		}
		.mains{
			width: 100%;
			height:auto;
			
			.top1{
				border: solid 1px #edebeb;
				min-width: 400px;
				overflow: hidden;
				width: 100%;
				height:40px;
				transition: 0.5s;	
				h3{
					display: block;
					width: 100px;
					height:100%;
					text-align: left;
					float: left;
					line-height: 40px;
					margin-left: 50px;
					font-size: 14px;
					font-weight: 400;
				}
			}
			.top1:hover{
				background-color: #edf7ff;
			}
		}
	}
}	

	
</style>
