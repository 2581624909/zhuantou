<template>
	<div id="app">
			<div class="main">
				<div class="top">
					<h3>食品名称	</h3>
					<h3>食品介绍	</h3>
					<h3>评分</h3>
					<h3>操作</h3>
				</div>
				<div class="mains">
					<div class="top1" v-for="data in userdata">
						<h3 v-text="data.name"></h3>
						<h3 v-text="data.address"></h3>
						<h3 v-text="data.introd"></h3>
						<h3>
							<el-button size="mini" @click = 'sterk(data.id)'>编辑</el-button>
							<el-button size="mini" type="warning"  @click = "styo(data.id)">删除</el-button>
						</h3>
					</div>
				</div>
			</div>
			<div class="box" v-if="scre">
				<h3>修改食品信息</h3>
				<div>
					<span>食品名称</span>
					<el-input v-model="bian.id" ></el-input>
				</div>
				<div>
					<span>食品介绍</span>
					<el-input  v-model="bian.dizhi"></el-input>
				</div>
				<div>
					<span>评分</span>
					<el-input  v-model="bian.name" disabled = 'disabled'></el-input>
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
		},
		mounted() {
			this.axios.get('http://localhost:8081/food',{
				params:{
					user:this.text.a
				}
			}).then((data)=>{
				console.log(data.data)
				this.userdata = data.data
			})
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
