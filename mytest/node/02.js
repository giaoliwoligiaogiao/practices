// var argv=ProcessingInstruction.argv;
// console.log(argv);

var argv=process.argv.slice(2);
switch(argv[0]){
    case 'init':console.log('你学要初始化');break;
    case 'install':var installPackName=argv[1];
     console.log('你在安装'+installPackName);break;
    
    case 'uninstall':console.log('uninstall');break;
}



// if(argv[0]=='init'{})
// console.log(argv.toString);

