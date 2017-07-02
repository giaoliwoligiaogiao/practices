var frame=[],i=0,fps=10;
var size=process.stdout.getWindowSize()[1];
// for(var i=0;i<size;i++){
//     process.stdout.write('\r \n');
// }
frame[frame.length]=
`╭~~~╮

(o^.^o)`;
frame[frame.length]=
`╭~~~╮

(o@.@o) `;
frame[frame.length]=
`╭~~~╮

(o~.~o)`;
frame[frame.length]=
`╭ ﹌╮

(o'.'o)`;
frame[frame.length]=
` ╭%╮ ╭'''╮ 

 (@^o^@) (⌒:⌒) 
 (~):(~) (~)v(~) `;

var  render =()=>{
process.stdout.write('\033[2J');
process.stdout.write('\033[0f');
process.stdout.write(frame[i++%5]);


}
setInterval(render,1000/fps)
