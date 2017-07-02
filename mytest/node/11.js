console.log(module);
const module3=require('./cal/module2.js');
console.log('+++++++++++++++++++++++++++++++++++++++++');
console.log(module);
if(module.parent){
    //当前这个文件是被别的文件加载
}else{
    //入口文件
}
