var vnase = document.getElementById('navse')

var bsnav = echarts.init(vnase)
var series = []
var xAxis = []
axios.get("https://edu.telking.com/api?type=month").then(function(data) {
    console.log(data.data)
	series=data.data.data.series
	xAxis=data.data.data.xAxis
	console.log(series)
	console.log(xAxis)
	van()
})

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
        data: xAxis
    },
    yAxis: {},
    series: [{
        name: '',
        type: 'line',
        data: series
    }],

}
main.setOption(obj)
}

var imge = document.getElementById('imgess')
var sp = document.getElementsByTagName('span')



var obj = ["img/1.jpg","img/2.jpg","img/3.jpg"]
var index = 0;
sp[0].onclick=function(){

	index--
	if(index<0){
		index=2
	}
	imge.src=obj[index]

}
sp[1].onclick=function(){
	index++
	if(index==obj.length){
		index=0
	}
	imge.src=obj[index]
}
function times(){
	if(index==obj.length-1){
		index=-1
	}
	console.log(index)
	index++
	imge.src=obj[index]
}
var tim = setInterval(times,2000)

var ir = document.getElementsByClassName('lr')
var gid = document.getElementById('analytics')
gid.onmouseover=function(){
	//clearInterval(tim)
}
gid.onmouseout=function(){
	
}
var sli = document.getElementById('sli')
for(let i=0;i<obj.length;i++){
	sli.innerHTML+='<span>'+(i+1)+'</span>'
}
sli.style.width=18*obj.length+'px'
sli.style.marginLeft=-(18*obj.length)/2+'px'


var spanes = sli.getElementsByTagName('span')
for(let i = 0 ; i < spanes.length; i++){
	spanes[i].onclick=function(){
		index=i
		if(index==obj.length){
			index=0
		}
		imge.src=obj[index]
	}
}
