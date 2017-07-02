'use strict';
//实现命令行计算器
//接受参数
//进行运算

const args=process.argv.slice(2);
//['node 执行程序所在路径'，‘当前脚本所在路径’,..]
for(let i=0;i<5;i++)
console.log(process.argv[i]);

let parameter1=args[0];
let opector=args[1];
console.log(opector);   
let parameter2=args[2];
let result;
// switch(){}
// let result =eval(`${parameter1} ${opector} ${parameter2}`);
const calc =require('./cal/cal.js');
switch(opector){
    case '+':
    result= calc.add(parameter1,parameter2);
    break;
    case '-':
    result= calc.sub(parameter1,parameter2);
    break;
    case '*':
    case '×':
    result=  calc.mut(parameter1,parameter2);
    break;
    case '/':console.log('触发');
    case '÷':
    result=  calc.div(parameter1,parameter2);
    break;
}
// switch(opector){
//     case '+':
//     result= parseFloat(parameter1)+parseFloat(parameter2);
//     break;
//     case '-':
//     result= parseFloat(parameter1)+parseFloat(parameter2);
//     break;
//     case '*':
//     case '×':
//     result= parseFloat(parameter1)+parseFloat(parameter2);
//     break;
//     case '/':
//     case '÷':
//     result= parseFloat(parameter1)+parseFloat(parameter2);
//     break;
// }
console.log(result);