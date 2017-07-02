// console.time('main');
// setTimeout(function(){
//     for(var  i=0;i<1000000000;i++){

//     }
// },0);

// console.timeEnd('main');
// console.log('完成执行了');

//使用异步错开耗费时间比较多的函数
// console.time('main');
// get(url,function(data){

// })
// console.timeEnd('main');

// 1、如果函数需要回调参数，一定要在参数的最后出现
function geta(path,callback){
    if(err){
        callback(new Error('xxx错误'));
    }else{
        callback(null,data);
    }
}
// 2. 错误优先的回调函数

function isEvenOrOdd(number,callback){
    if(typeof number =='number'){
        if(number%2){
            //约定熟成的回调参数的第一个参数作为错误函数回调
            callback(null,'当前传入的是奇数')
        }else{
            callback(null,'当前传入的是偶数')
        }
    }else{
        // throw new Error('你传入的不是数字');
            callback(new Error('你传入的不是数字'));
    }
}

isEvenOrOdd(10,(error,data)=>{
    if(error) throw error;
    console.log(data);
});

isEvenOrOdd(11,(error,data)=>{
    if(error) throw error;
    console.log(data);
});

isEvenOrOdd('11',(error,data)=>{
    if(error) throw error;
    console.log(data);
})







