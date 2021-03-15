
function dispBox(num){
    var res=document.querySelector(".result")
 res.value+=num
  
  
}
function print(){
    var res=document.querySelector(".result").value;
var out=eval(res)
document.querySelector(".result").value=out
}
function  del(){
    var res=document.querySelector(".result").value;
    var data=res.slice(0,-1)
    document.querySelector(".result").value=data
}