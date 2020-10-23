//异步请求
// 1.url
// 2.传输数据
var ajaxs = (url, data) => {

    //创建XML对象
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP")

    //返回数据
    xhr.onload = function() {
        // console.log(xhr.responseText)
        return xhr.responseText
    }

    //出错执行
    xhr.onerror = function() {
        console.log('请求出错')
    }

    //创建异步请求
    xhr.open('GET', url, true)

    //执行异步请求
    xhr.send(data)

}

//数组去重
// 1.数组
var array = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        for (let s = i + 1; s < arr.length; s++) {
            if (arr[i] === arr[s]) {
                arr.splice(s, 1)

            }
        }
    }
    return arr
}


//放大图片
// 1.图片集合dom
var imgF = (imgdom) => {
    document.body.innerHTML += "<div id = 'imgser'></div>"
    var box = document.getElementById('imgser')
    box.style.display = 'flex'
    box.style.position = 'fixed'
    box.style.top = '0px'
    box.style.width = '100%'
    box.style.height = window.innerHeight + 'px'
    box.style.backgroundColor = "rgba(0,0,0,0.2)"
    box.style.justifyContent = 'center'
    box.style.alignItems = 'center'

    let swidth = imgdom.style.width
    let sheight = imgdom.offsetHeight

    box.innerHTML += `<img id='a' src='${imgdom.src}' style = 'width:300px;height:300px;background-color: rgba(0,0,0,0.4);'>`

    box.onclick = function(event) {
        var e = event || window.event
        e.preventDefault()
        box.parentNode.removeChild(box)
        return false
    }
}


//图片预加载
// 1.图片集合dom
var imgjia = (dom) => {


    // dom[i].offsetTop //dom的top值
    // window.pageYOffset //浏览器的滚动高度值
    // window.outerHeight //浏览器屏幕高度

    console.log(window.pageYOffset)

    //dom的top值小于浏览器高度加上滚动条高度时再添加图片实现懒加载
    for (let i = 0; i < dom.length; i++) {
        if (dom[i].offsetTop < (window.pageYOffset + window.outerHeight)) {
            dom[i].src = dom[i].dataset.srcs
        }
    }
}


//方块拖拽
var Topzai = dom => {
    //鼠标按下

    dom.addEventListener('mousedown', (e) => {



        //鼠标在方块内位置
        var boxtop = e.offsetY
        var boxleft = e.offsetX




        document.onmousemove = function(a) {

            //鼠标在方块外位置
            var doutop = a.clientY
            var douleft = a.clientX

            //拖拽后位置
            var top = doutop - boxtop
            var left = douleft - boxleft


            dom.style.top = top + "px"
            dom.style.left = left + "px"

        }
    })

    //鼠标松开
    document.addEventListener('mouseup', () => {
        console.log('鼠标松开了')
        document.onmousemove = null
    })

}