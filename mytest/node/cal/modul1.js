// console.log(__dirname);
// console.log(__fliename);
const fs =require('fs');
//所有的文件操作都必须是绝对路径（物理路径）
fs.readFile(__dirname+'/../list.md','utf8',(error,content)=>{
    if(error){
        throw error;
    }
console.log(content);
});