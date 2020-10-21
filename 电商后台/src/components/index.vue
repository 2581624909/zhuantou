<template>
	<div id="app">
		<div id="home">
			<div v-for="data in hometext" class="box">
				<div v-text="data.name"class="tou" @click="shows(data.name)"></div>
				<div @click="showsa(datas)" :name='datas' v-if="data.falg" v-for="datas in data.datas" v-text="datas" class="main"></div>
			</div>
			
		</div>
		<div class="right">
				<tou></tou>
				<!-- <component :is="zujian"></component> -->
				<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import tou from './tou.vue'
	import index from './首页/index.vue'
	import username from './数据管理/username.vue'
	import nerchants from './数据管理/merchants.vue'
	import food from './数据管理/food.vue'
	import order from './数据管理/order.vue'
	import admin from './数据管理/admin.vue'
	import addShops from './添加数据/addShops.vue'
	import addGoods from './添加数据/addGoods.vue'
	import chart from './图表/chart.vue'
	import explain from './说明/explain.vue'
	export default {
		data(){
			return {
				name:'',
				zujian:'index',
				hometext:[
							{
								name:'首页',
								falg:false,
								datas:[
									'首页'
								],
							},
							{
								name:'数据管理',
								falg:false,
								datas:[
										'用户列表',
										'商家列表',
										'食品列表',
										'订单列表',
										'管理员列表',
								]
							},
							{
								name:'添加数据',
								falg:false,
								datas:[
									'添加商铺',
									'添加商品',
									]
							},
							{
								name:'图表',
								falg:false,
								datas:[
									'用户分布'
								]
							},
							{
								name:'说明',
								falg:false,
								datas:[
									'说明'
								]
							},
							
						]
			}
		},
		mounted() {
			this.text.a = this.$route.query.name
			this.name = this.$route.query.name
			console.log(this.text.a)
			this.$router.push('indexs')
		},
		watch:{
			ids:function(){
				alert(1)
			}
		},
		computed:{
			ids(){
				return this.text.pushid
			}
		},
		methods:{
			showsa(data){
				if(data == '首页'){
					this.zujian = 'index'
					this.$router.push('indexs')
				}else if(data == '用户列表'){
					this.zujian = 'username'
					this.$router.push('/username')
				}else if(data == '商家列表'){
					this.zujian = 'nerchants'
					this.$router.push('/nerchants')
				}else if(data == '食品列表'){
					this.zujian = 'food'
					this.$router.push('/food')
				}else if(data == '订单列表'){
					this.zujian = 'order'
					this.$router.push('/order')
				}else if(data == '管理员列表'){
					this.zujian = 'admin'
					this.$router.push('/admin')
				}else if(data == '添加商铺'){
					this.zujian = 'addShops'
					this.$router.push('/addShops')
				}else if(data == '添加商品'){
					this.zujian = 'addGoods'
					this.$router.push('/addGoods')
				}else if(data == '用户分布'){
					this.zujian = 'chart'
					this.$router.push('/chart')
				}else if(data == '说明'){
					this.zujian = 'explain'
					this.$router.push('/explain')
				}
				
				var a = document.getElementsByClassName('main')
				for(let i = 0 ; i<a.length ; i++){
					if(a[i].innerHTML == data){
						a[i].style.color = 'brown'
					}else{
						a[i].style.color = '#a09f9f'
					}
				}
			},
			shows(lest){
				for(let i = 0 ; i <this.hometext.length ; i++){
					if(this.hometext[i].name == lest){
						var falg = !this.hometext[i].falg
						this.$set(this.hometext[i],'falg', falg)
					}
				}
			}
		},
		components:{
			index,
			username,
			tou,
			nerchants,
			food,
			order,
			admin,
			addShops,
			addGoods,
			chart,
			explain
		}
	}
</script>

<style lang="scss">
	body,html{
		width: 100%;
		height: 100%;
	}
	*{
		margin: 0;
		padding: 0;
	}
	#app{
		width: 100%;
		height:100%;
		display: flex;
		#home{
			margin: 0;
			width: 20%;
			min-width: 160px;
			max-width: 250px;
			height: 100%;
			background-color: #324057;
			flex: none;
			
			.box{
				width: 100%;
				height:auto;
				text-align: left;
				font-size: 16px;
				line-height: 60px;
				transition: 1s;
				cursor: pointer;
				
				.main,.tou{
					padding-left:30px ;
					box-sizing: border-box;
					background-color: #324057;
					color: white;
					transition: 0.5s;
				}
				
				.tou:hover{
					background-color: #48576a;
				}
				
				.main{
					cursor: pointer;
					background-color: #1f2d3d;
					color: #a09f9f;
					
				}
			}
		}
		.right{
			flex: 1;
			height: 100%;

		}
	}
</style>
