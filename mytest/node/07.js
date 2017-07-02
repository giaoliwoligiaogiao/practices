var q='请输入用户名';
var  users={
    'admin':'123',
    'user1':'321',
    'user2':'213'
};
var  i=0;
var flag=true;
process.stdout.write(q);
process.stdin.on('data',(input)=>{
    // console.log(i++);
    // 在这个地方确定输入的是什么内容；
   process.stdout.write(typeof input);
//    input是一个流（二进制数组）
    input=input.toString().trim();
    //因为输入的最后一个是enter是空格 空格也是字符串
    if(flag&&Object.keys(users).indexOf(input)==-1){
        process.stdout.write('用户名不存在'+'\n');
        process.stdout.write(q+'\n');
        flag=false;
    }else 
    // if(Object.keys(users).indexOf(input)==-1)
    {
        // var  pwd=users[]
        // console.log('用户名存在');
        process.stdout.write('请输入密码：\n')
    }
})
// process.stdin.on('data',(data)=>{
//     process.stdout.write(data);
// })
