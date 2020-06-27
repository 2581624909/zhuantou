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
	