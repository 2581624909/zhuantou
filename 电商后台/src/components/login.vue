<template>
	<div id="app">
		<div class="box">
			<div>
				<span>用户名</span>
				<el-input v-model="name"></el-input>
			</div>
			<div>
				<span>密码</span>
				<el-input v-model="password"></el-input>
			</div>
			<div>
				<el-button @click = login()>登录</el-button>
			</div>
			<p>未注册则自动注册</p>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				url:"http:\/\/localhost:8081/login",
				name:'',
				password:'',
				ok:false
			}
		},
		methods:{
			login(){
				var then = this
				then.axios.get(this.url,{
					params:{
						name:this.name,
						password:this.password
					}
				}).then((data)=>{
					if(data.data.ok == 'ok'){
						this.$router.push({
							path:'/index',
							query:{
								name:data.data.name
							}
							})
						this.ok = true
					}else if(data.data.ok == 'oks'){
						alert('注册成功')
						this.$router.push({
							path:'/index',
							query:{
								name:data.data.name
							}
							})
							
					}else{
						alert('用户名或密码错误')
					}
				})
			}
		},
		watch:{
			ok(){
			}
		}
	}
</script>

<style lang="scss" scoped>
	*{
		padding: 0;
		margin: 0;
	}
	#app{
		width: 100%;
		height:100%;
		background-color: #d3e2f3;
		position: relative;
		p{
			width: 100%;
			text-align: center;
			}
		.box{
			width: 500px;
			height:300px;
			background-color: #98c3f3;
			opacity: 0.4;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50% , -50%);
			padding-top: 50px;
			box-sizing: border-box;
			transition: 1s;
			
			div{
				width: 80%;
				height:auto;
				display: flex;
				margin: 0 auto;
				margin-bottom: 18px;
				color: white;
				span{
					width: 100px;
					flex: none;
					text-align: center;
				}
				
				.inp{
					float: right;
				}
				
			}
		}
		.box:hover{
			opacity: 0.8;
		}
	}
</style>
