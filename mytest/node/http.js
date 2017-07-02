'use strict';
//严格模式
//v8 对es6支持情况分成三个级别  根本不支持  直接支持  严格支持
const http=require('http');
let count=0;
const server=http.createServer((req,res)=>{
    //此回调函数在有任何用户请求时触发
    res.write(`你是第${count++}个用户`);
    res.end();
})
server.listen(2080,(error)=>{
    if(error)
    throw error;
    console.log('成功启动web服务器  端口号为：2080');
})