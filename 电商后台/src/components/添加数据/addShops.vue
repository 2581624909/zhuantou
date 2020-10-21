<template>
	<div id="app">
		<div class="a">
			<div class="t">
				<span>*店铺名称</span>
			</div>
			<div class="b">
				<el-input
					class="int"
					placeholder="请输入内容"
					v-model="name"
					clearable>
				</el-input>
			</div>
		</div>
		<div class="a">
			<div class="t">
				<span>*详细地址</span>
			</div>
			<div class="b">
				<el-input
					class="int"
					placeholder="请输入内容"
					v-model="site"
					clearable>
				</el-input>
			</div>
		</div>
		<div class="a">
			<div class="t">
				<span>*联系电话</span>
			</div>
			<div class="b">
				<el-input
					class="int"
					placeholder="请输入内容"
					v-model="phone"
					clearable>
				</el-input>
			</div>
		</div>

		<div class="a">
			<el-button type="primary" size="medium" @click = add>创建</el-button>
		</div>
	</div>
</template>



<script>
	export default {
		data(){
			return {
				name:'',
				site:'',
				phone:'',
			}
		},
		methods:{
			add(){
				var obj = {
							user:this.text.a,
							name:this.name,
							site:this.site,
							phone:this.phone,	
						}
				this.axios.get('http://localhost:8081/addshops',{
					params:obj
				}).then((data)=>{
					console.log(data)
					if(data.data == 'ok'){
						alert('添加成功')
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	#app{
		width: 54%;
		height:80%;
		margin:  0 auto;
		display: block;
		padding-top: 50px;
		box-sizing: border-box;
		margin-top: 20px;
		.a{
			display: block;
			width: 80%;
			height:40px;
			margin:  0 auto;
			margin-bottom: 30px;
			display: flex;
			
			.t{
				width: 20%;
				flex: none;
				text-align: center;
				line-height: 40px;
			}
			.b{
				flex: 1;
			}
		}
	}
</style>

