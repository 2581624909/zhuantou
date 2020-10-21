<template>
	<div id="index">
		<div class="mains">
			<div class="mains-t">数据统计</div>
			<div class="mains-b">
				<div>
					<h1 class="bix-s bac">当日数据:</h1>
					<h1 class="bix-s" v-for="data in datas.day1" v-text="data"></h1>
					
				</div>
				<div>
					<h1 class="bix-s bas">总数据:</h1>
					<h1 class="bix-s" v-for="data in datas.day2" v-text="data"></h1>
				</div>
			</div>
		</div>
		<div class="bottom" id="bot">
			
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				imgsrc:'https://elm.cangdu.org/img/default.jpg',
				datas:{
					day1:[
						'1新增用户',
						'1新增订单',
						'2新增管理员'
					],
					day2:[
						'49897注册用户',
						'18213订单',
						'75032管理员'
					]
				},
				biap:{
					day1:["2020-08-29","2020-08-30","2020-09-01","2020-09-02","2020-09-03","2020-09-04"],
					day2: [1, 20, 36, 10, 10, 20]
				}
			}
		},
		 mounted(){
		    this.drawLine();
		  },
		  methods: {
		    drawLine(){
		        let myChart = this.echarts.init(document.getElementById('bot'))
		        myChart.setOption({
		            title: { text: '走势图' },
		            tooltip: {},
		            xAxis: {
		                data: this.biap.day1
		            },
		            yAxis: {},
		            series: [{
		                name: '新注册用户',
		                type: 'bar',
		                data: this.biap.day2
		            }]
		        });
		    }
		  }
	}
</script>

<style lang="scss">
	#index{
		width: 100%;
		height:100%;
		

		
		.mains{
			width: 100%;
			height:220px;
			
			.mains-t{
				margin-top: 10px;
				margin-bottom: 10px;
				width: 100%;
				height:60px;
				line-height: 60px;
				text-align: center;
				font-size: 30px;
				font-weight: 700;
			}
			.mains-b{
				width: 100%;
				height:200px;
				padding-left: 30px;
				box-sizing: border-box;
				div{
					text-align: center;
					width: 100%;;
					height:40px;
					margin-top: 10px;
					
					.bix-s{
						float: left;
						border-radius: 10px;
						margin-left: 20px;
						width: 200px;
						height: 100%;
						background-color: #e5e9f2;
						color: black;
						font-size: 22px;
						font-weight: 400;
						line-height: 40px;
					}
					.bac{
						background-color: #ff9800;
						color: white;
					}
					.bas{
						background-color: #20a0ff;
						color: white;
					}
				}
			}
		}
		
		.bottom{
			width: 100%;
			height: 380px;
			
		}

	}
</style>
