<template>
	<div id="app">
		<div class="top">
			<h3>请选择食品种类</h3>
			<div class="box">
				<h3>食品种类</h3>
				<el-select v-model="datatext.kind">
					<el-option
						v-for="data in zhle"
						:key = "data.id"
						:value="data.name"
					>
					</el-option>
				</el-select>
			</div>
		</div>
		<div class="button">
			<h3>添加食品</h3>
			<div class="boxs">
				<div>
					<span>选择店铺</span>
					<el-select v-model="datatext.id">
						<el-option
							v-for="data in obj"
							:key = "data.address"
							:value="data.name"
						>
						</el-option>
					</el-select>
				</div>
				<div>
					<span>食品名称</span>
					<el-input v-model="datatext.name"></el-input>
				</div>
				<div>
					<span>食品活动</span>
					<el-input  v-model="datatext.activity"></el-input>
				</div>
				<div>
					<span>食品详情</span>
					<el-input  v-model="datatext.particularc"></el-input>
				</div>
			</div>
		</div>
		<div class="int">
			<el-button style="float: right;" type="primary" @click = shows>
				确认添加
			</el-button>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				datatext:{
					id:'',
					kind:'',
					name:'',
					activity:'',
					particularc:'',
				},
				obj:[],
				zhle:[
					{
						name:'种类1',
						id:'种类1'
					},
					{
						name:'种类2',
						id:'种类2'
					},
					{
						name:'种类3',
						id:'种类3'
					},
				]
			}
		},
		methods:{
			shows(){
				var obj = {
					user:this.datatext.id,
					name:this.datatext.name,
					activity:this.datatext.activity,
					particularc:this.datatext.particularc
				}
				this.axios.get('http://localhost:8081/addGoods',{
					params:obj
				}).then((data)=>{
					if(data.data == 'ok'){
						alert('添加成功')
					}
				})
			}
		},
		mounted() {
			this.axios.get('http://localhost:8081/addgoodsadd',{
				params:{
					user:this.text.a
				}
			}).then((data)=>{
				this.obj = data.data
				console.log(data.data)
			})
		}
	}
</script>

<style lang="scss" scoped="scoped">
	#app{
		width: 60%;
		height:auto;
		margin: 0 auto;
		padding-top: 20px;
		box-sizing: border-box;
		display: block;
		.top{
			width: 100%;
			height:160px;
			
			
			h3{
				text-align: center;
				font-weight: 300;
			}
			
			.box{
				padding-top: 30px;
				box-sizing: border-box;
				border-radius:10px;
				width: 100%;
				height:80px;
				display: flex;
				
				h3{
					width: 90px;
					text-align: left;
					line-height: 40px;
					font-weight: 300;
					font-size: 16px;
				}
			}
		}
		.button{
			width: 100%;
			height:auto;
			min-height: 290px;
			h3{
				text-align: center;
				font-size: 18px;
				font-weight: 300;
			}
			.boxs{
				width: 100%;
				height:200px;
				box-sizing: border-box;
				padding-top: 30px;
				div{
					width: 100%;
					display: flex;
					margin-bottom: 16px;
					height:40px;
					
					span{
						width: 100px;
						line-height: 40px;
						font-weight: 200;
					}
				}
			}
		}
		.int{
			width: 100%;
		}
	}
</style>