var vnase = document.getElementById('navse')

var bsnav = echarts.init(vnase)
var series = []
var xAxis = []

//异步亲请求
function ajax(){
	//创建XML对象
	var xhr = window.XMLHttpRequest?new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")
	
	//返回数据
	xhr.onload = function(){
		console.log(xhr.responseText)
		var data = JSON.parse( xhr.responseText)
		
		series=data.data.series
		xAxis=data.data.xAxis
		van()
	}
	
	//出错执行
	xhr.onerror = function(){
		console.log('请求出错')
	}
	
	//创建异步请求
	xhr.open('GET','https://edu.telking.com/api?type=month',true)
	
	//执行异步请求
	xhr.send()
	
}
ajax()
bsnav.setOption({
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        data: [
            { value: 25, name: 'Sun' },
            { value: 27, name: 'Mon' },
            { value: 10, name: 'Tue' },
            { value: 35, name: 'Wed' },
            { value: 40, name: 'Thu' },
            { value: 23, name: 'Frl' },
            { value: 27, name: 'Sat' }
        ]
    }]
});

var vnase2 = document.getElementById('navse2')
var bsnav2 = echarts.init(vnase2)
var option = {
    title: {
        text: '商品数'
    },

    legend: {
        data: ['商品数']
    },
    xAxis: {
        data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Frl", "Sat"]
    },
    yAxis: {},
    series: [{
        name: '商品数',
        type: 'bar',
        data: [0, 3, 6, 9, 12, 15]
    }]
};
bsnav2.setOption(option);

var main = document.getElementById('main-b')
var main = b1 = echarts.init(main)

function van(){
	var obj = {
    title: {
        tetx: '标题？？'
    },
    xAxis: {
        data: xAxis,
    },
    yAxis: {},
    series: [{
        name: '',
        type: 'line',
        data: series,
		smooth: true,
		color:'#4d8aef',
		areaStyle:{
			color:'#f3f6fe'
		},
		itemStyle :{
			normal:{
				label:{
					show:true
				}
			}
		}
    }],

}
main.setOption(obj)
}

//轮播图自动切换
var inputs =  document.getElementsByClassName('ininin')
var i = 0 ;
function lun(){
	i++
	if(i == inputs.length){
		i=0
	}
	inputs[i].checked='checked'
}
var tim = setInterval(lun,2000)

// 轮播图进入移出
document.getElementById('analytics').onmouseover = function(){
	clearInterval(tim)
}
document.getElementById('analytics').onmouseout = function(){
	tim = setInterval(lun,2000)
}

// 轮播图左右按键
document.getElementsByClassName('leftss')[0].onclick=function(){
	i--;
	if(i == inputs.length){
		i=0
	}
	inputs[i].checked='checked'
}
document.getElementsByClassName('rightss')[0].onclick=function(){
	i++;
	if(i == inputs.length){
		i=0
	}
	inputs[i].checked='checked'
}
