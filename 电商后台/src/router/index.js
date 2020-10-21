import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../components/index.vue'
import login from '../components/login.vue'

	import indexs from '../components/首页/index.vue'
	import username from '../components/数据管理/username.vue'
	import nerchants from '../components/数据管理/merchants.vue'
	import food from '../components/数据管理/food.vue'
	import order from '../components/数据管理/order.vue'
	import admin from '../components/数据管理/admin.vue'
	import addShops from '../components/添加数据/addShops.vue'
	import addGoods from '../components/添加数据/addGoods.vue'
	import chart from '../components/图表/chart.vue'
	import explain from '../components/说明/explain.vue'
Vue.use(VueRouter)

  const routes = [
	  {
			path:'/',
			redirect:'/login',
			exact:true
	  },
	  {
			path:'/login',
			component:login
	  },
	  {
			path:'/index',
			component:index,
			children:[
				{
					path:'/indexs',
					component:indexs
				},
				{
					path:'/username',
					component:username
				},
				{
					path:'/nerchants',
					component:nerchants
				},
				{
					path:'/food',
					component:food
				},
				{
					path:'/order',
					component:order
				},
				{
					path:'/admin',
					component:admin
				},
				{
					path:'/addShops',
					component:addShops
				},
				{
					path:'/addGoods',
					component:addGoods
				},
				{
					path:'/chart',
					component:chart
				},
				{
					path:'/explain',
					component:explain
				}
			]
	  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
