var x=100;
globalThis.y=400;

var x1=93843;
var y1=234234;


//block scope
var x=20;
{
    var x=10;
    console.log('inside block for var :'+x); //10
}
console.log('outside block for var :'+x) //10


let y=20;
{
    let y=100;
    console.log('inside block for let :'+y) //100
}
console.log('outside block for let:'+y) //20


//variable hoisting is supported by "var" but not by "let"
console.log(h);  //9393933
var h=9393933;


//function hoisting
f1();
function f1(){
    console.log('this is f1 function execution')
};

//function hoisting will not work for the function expressions
//f2();  //TypeError: f2 is not a function

var f2=function()
{
    console.log('function f2 execution')
}
f2();

module.exports.xx1=x1;
module.exports.yy1=y1;