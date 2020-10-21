<template>
	<div id="app">
			<div class="main">
				<div class="top">
					<h3>姓名</h3>
					<h3>注册日期	</h3>
					<h3>地址</h3>
					<h3>权限</h3>
				</div>
				<div class="mains">
					<div class="top1" v-for="data in userdata">
						<h3 v-text="data.id"></h3>
						<h3 v-text="data.dizhi"></h3>
						<h3 v-text="data.name"></h3>
						<h3 v-text="data.day"></h3>
					</div>
				</div>
			</div>
			<div class="box" v-if="scre">
				<h3>修改店铺信息</h3>
				<div>
					<span>店铺名称</span>
					<el-input v-model="bian.id" disabled = 'disabled'></el-input>
				</div>
				<div>
					<span>店铺地址</span>
					<el-input  v-model="bian.dizhi"></el-input>
				</div>
				<div>
					<span>店铺介绍</span>
					<el-input  v-model="bian.name"></el-input>
				</div>
				<el-button class="ton" @click = 'ques()'>确定</el-button>
				<el-button  class="ton" @click='sterk'>取消</el-button>
			</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				bian:{},
				scre:false,				
				imgsrc:'https://elm.cangdu.org/img/default.jpg',
				userdata:[
					{
						id:'1',
						day:'管理员',
						name:'大王',
						dizhi:'我家'
					},
					{
						id:'2',
						day:'管理员',
						name:'大王',
						dizhi:'我家'
					},
					{
						id:'3',
						day:'管理员',
						name:'大王',
						dizhi:'我家'
					},
					{
						id:'4',
						day:'管理员',
						name:'大王',
						dizhi:'我家'
					},
				]
			}
		},
		methods:{
			ques(){
				for(let i = 0 ; i <this.userdata.length ; i++){
					if(this.userdata[i].id == this.bian.id){
						this.$set(this.userdata[i],'id',this.bian.id)
						this.$set(this.userdata[i],'name',this.bian.name)
						this.$set(this.userdata[i],'dizhi',this.bian.dizhi)
						this.scre = false
					}
				}
			},
			sterk(id){
				for(let i = 0 ; i <this.userdata.length ; i++){
					if(this.userdata[i].id == id){
						var a = this.userdata[i]
						this.$set(this.bian,'id',a.id)
						this.$set(this.bian,'name',a.name)
						this.$set(this.bian,'dizhi',a.dizhi)
					}
				}
				this.scre = !this.scre
			},
			styo(id){
				for(let i = 0 ; i <this.userdata.length ; i++){
					if(this.userdata[i].id == id){
						this.userdata.splice(i,1)
					}
				}
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
#app{
	position: relative;
	width: 96%;
	height:100%;
	margin: 0 auto;
	margin-top: 30px;
	.box{
		.ton{
			float: right;
			margin-left: 10px;
		}
		background-color: white;
		position: absolute;
		width: 600px;
		height:430px;
		transform: translate(-50% , -60%);
		top:50%;
		left: 50%;
		padding-top: 20px;
		padding-left: 20px;
		padding-right: 20px;
		
		box-sizing: border-box;
		background-color: wheat;
		
		h3{
			margin-bottom: 20px;
		}
		div{
			margin-bottom: 20px;
		}
	}
	.main{
		width: 100%;
		height:100%;
		
		.top{
			display: flex;
			border: solid 1px #edebeb;
			min-width: 400px;
			overflow: hidden;
			width: 100%;
			height:40px;
			background-color: #eef1f6;
			
			h3{
				flex: 1;
				display: block;
				width: 100px;
				height:100%;
				text-align: left;
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
				display: flex;
				border: solid 1px #edebeb;
				min-width: 400px;
				overflow: hidden;
				width: 100%;
				height:40px;
				transition: 0.5s;	
				h3{
					flex: 1;
					display: block;
					width: 100px;
					height:100%;
					text-align: left;
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
