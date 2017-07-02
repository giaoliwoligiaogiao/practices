var  mysql=require('mysql');
var url=require('url');
var client=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
});
client.connect();
client.query('use test');
var http=require('http');
http.createServer(
function(req,res) {
	var da='';
	res.writeHeader(200,{'Content-Type':'text/tml','Access-Control-Allow-Origin': '*'});
	client.query('select * from test',function(err,data,fil) {
//      for(var i=0;i<data.length;i++)
//      {
//              da+=data[i].id+" "+data[i].name+" "+data[i].age;
//      }
        res.write(data.stringify());
        res.end();      
        
	});
}).listen(3305);