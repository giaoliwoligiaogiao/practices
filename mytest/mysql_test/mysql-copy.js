var mysql = require('mysql');
const querystring = require("querystring");
var url = require('url');
var client = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'test', //数据库名
});
client.connect();
client.query('use test');
var http = require('http');
http.createServer(
    function(req, res) {
    	var pathname = url.parse(req.url).pathname;  //pathname => select
        var arg = url.parse(req.url).query;          //arg => name=a&id=5
    	 arg=querystring.parse(arg);
    	 console.log(arg);
        var da = '';
        res.writeHeader(200, { 'Content-Type': 'text/html','Access-Control-Allow-Origin': '*' });
       
       	// INSERT INTO table_name (列1, 列2,...) VALUES (值1, 值2,....)
       	// var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(?,?,?,?,?)';
		// var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];
        // client.query('select * from test', function(err, data, fil) {
        //     console.log(JSON.stringify(data));
        //    	var x=JSON.stringify(data);
        //     res.write(x);
        //     res.end();
        // });
//console.log(addSql);
var arrs=["select","INSERT INTO","DELETE FROME"]
switch (arg.From){
	case 'song':
		break;
		case 'songer':
		break;
		case 'user':
		break;
		case 'songlist':
		break;
		case 'ge_dan_lie_biao':
		break;

}

switch (arg.dos){
	case 'sel':arg.what=arg.what||'*';var sql='select'+arg.what+'from'+arg.from;selects(sql)
		break;
		case 'add':var attr=[],val=[];
        for(key in arg){
        	attr.push(key);
        	val.push('\"'+arg[key]+'\"');
        }
       var sql= 'INSERT INTO '+arg.from+'('+attr.join(',')+') VALUES('+val.join(',')+')';
		break;
		case 'del':var sql='delete from  '+arg.From+' where'+arg.what;
		break;
	default:
		break;
}

function selects(sql){
		client.query(sql, function(err, data, fil) {
            console.log(JSON.stringify(data));
           	var x=JSON.stringify(data);
            res.write(x);
            res.end();
        });
}

//增加数据成功

   		var attr=[],val=[];
        for(key in arg){
        	attr.push(key);
        	val.push('\"'+arg[key]+'\"');
        }
//      console.log(val.join(','));
//      console.log(attr.join(','));

       	var  addSql = 'INSERT INTO user('+attr.join(',')+') VALUES('+val.join(',')+')';
       	console.log(addSql);
		client.query(addSql,function (err, result) {
		        console.log('--------------------------INSERT----------------------------');
		        console.log('INSERT ID:',result);        
		       	console.log('-----------------------------------------------------------------\n\n');  
		});
//搜索
//client.query('select * from user', function(err, data, fil) {
//          console.log(JSON.stringify(data));
//         	var x=JSON.stringify(data);
//          res.write(x);
//          res.end();
//      });
        
        //      client.query('delete from  test where id=1', function(err, data, fil) {
//          console.log(JSON.stringify(data));
//         	var x=JSON.stringify(data);
//          res.write(x);
//          res.end();
//      });
//UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值

 client.query('update  test set url=\" www.test.com\" where id=\" 2\"', function(err, data, fil) {
            console.log(JSON.stringify(data));
           	var x=JSON.stringify(data);
            
        });