// node如何充分利用单线程
const fs =require('fs');
// 判断是否存在list文件
fs.stat('./list.ma',(err,stats)=>{
    if(err){
        console.error('文件不存在');
        fs.writeFile('./list.md',new Date(),(err)=>{
            if(err){
                console.error(err);
            }
            console.log('文件创建成功');
        })
        return false;
    }
    fs.unlink('./list.md',(err)=>{
        if(err){
            console.error(err);
             return false;
        };
        fs.writeFile('./list.md',new Date(),(err)=>{
            if(err){
                console.error(err);
                 return false;
            }
            console.log('文件删除成功');
        })
    })
})