var express = require('Express')
var mysql = require('mysql')
var app = express()


//定义sql参数
var conn = mysql.createConnection({
	host:'127.0.0.1',
	user:'adminstr',
	password:'123123',
	database:'xiangmu',
	port:9999
})
//连接数据库
function handleDisconnection() {
	

	//连接失败重新连接
    conn.connect(function(err) {
        if(err) {
            setTimeout('handleDisconnection()', 2000);
        }
    });

	//连接断开重新连接
    conn.on('error', function(err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.log('db error执行重连:'+err.message);
            handleDisconnection();
        } else {
            throw err;
        }
    })

	//设置允许跨域
	
};
handleDisconnection()

app.all('*', function (req, res, next) {
	    res.header('Access-Control-Allow-Origin', '*');
	    res.header('Access-Control-Allow-Headers', 'Content-Type');
	    res.header('Access-Control-Allow-Methods', '*');
	    res.header('Content-Type', 'application/json;charset=utf-8');
	    next();
	  });
	  
	//登录
	app.get('/login',(req,res)=>{
		var name = req.query.name;
		var password = req.query.password
		let sql = `select * from user where name = '${name}'`
		conn.query(sql,(a,b,c)=>{
			if(a){
				res.send('错误')
			}else{
				if(b.length>0){
					//返回已有用户
					
					let sqls = `select * from user where password = '${password}' and name = '${name}'`
					conn.query(sqls,(a,b,c)=>{
						if(a){
							
						}else if(b.length>0){
							res.send({ok:'ok',name:name})
						}else{
							res.send({ok:'no'})
						}
					})
					
				}else{
					
					//注册用户
					let sqlt = `insert into user (name,password) values ('${name}','${password}')`
					conn.query(sqlt , (err,data,s)=>{
						
						//返回已注册用户
						res.send({ok:'oks',name:name})
						
					})
					
					//建立新的用户表
					let a = `create table ${name} (name varchar(250) not null,address varchar(255) not null,introd varchar(255) not null)`
					conn.query(a,(err,data,n)=>{
						if(err){
							console.log('建立用户表失败')	
						}else{
							console.log('建立用户表成功')
						}
					})
				}
			}
		})
	})
	
	//添加店铺
	app.get('/addshops',(req,res)=>{
		console.log(req.query)
		var set = `insert into ${req.query.user} (name , address , introd) values ('${req.query.name}','${req.query.site}','${req.query.phone}')` 
		conn.query(set,(f,g,h)=>{
			res.send('ok')
			let a = `create table ${req.query.name} (name varchar(250) not null,address varchar(255) not null,introd varchar(255) not null)`
			conn.query(a,(err,data,n)=>{
				if(err){
					console.log('建立店铺失败')
				}else{
					console.log('建立店铺成功')
				}
				
			})
		})
	})
	
	//查询商户
	app.get('/addgoodsadd',(res,req)=>{
		var obj = []
		let s = `select * from ${res.query.user}`
		conn.query(s,(err,data,s)=>{
			obj=data
			req.send(obj)
		})
	})
	
	//添加食品
	app.get('/addGoods',(res,req)=>{
		var set = `insert into ${res.query.user} (name , address , introd) values ('${res.query.name}','${res.query.activity}','${res.query.particularc}')`
		conn.query(set,(f,g,h)=>{
			req.send('ok')
		})
	})
	
	//查询食品
	app.get('/food',(res,req)=>{
		
		//获取商家列表
		let s = `select name from ${res.query.user}`
		conn.query(s,(err,data,s)=>{
			let obj = []
			let p = []
			for(let i = 0 ; i <data.length ; i++){
					var a = `select * from ${data[i].name}`
					conn.query(a,(err,datas,h)=>{
						obj.push(datas)
					})
			}
			setTimeout(()=>{
				for(let i = 0 ; i < obj.length ; i++){
					for(let s = 0 ; s<obj[i].length ; s++){
						p.push(obj[i][s])
					}
				}
				req.send(p)
			},100)
			
		})
	})
	
	//启动服务器
	app.listen(8081,()=>{
		console.log('8081端口启动')
	})
	

