//cmd的规范
// define(function(require,module,exports){
    // 在node 中实现的是commonjs的规范
   function convert(input){
       return parseFloat(input);
   }
    function add (a,b){
        return  convert(a)+convert(b);
    }
     function sub (a,b){
        return  convert(a)-convert(b);
    }
     function mut (a,b){
        return  convert(a)*convert(b);
    }
     function div (a,b){
        return  convert(a)/convert(b);
    }


//自动化属性 es6  新增写法{add}等价{add:add}
module.exports={add,sub,mut,div};

// })




