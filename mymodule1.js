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


//arrowFuction();         // TypeError: arrowFuction is not a function
var arrowFuction=()=>{
    console.log("this is the arrowFunction execution")
}

arrowFuction();


// try to understand the how the output comes
var arrowFuction2=()=>console.log("welcome");
                        console.log("hello")

arrowFuction2();

var square= num =>num*num;
console.log('square of the number'+square(5));


//IIFE (Immediately Invoked Function Expression) this is like a constructor
(function(){
console.log('IIFE called')
})();


// arrays in js are heterogeneous
var array1=['apple','mango',232,83.4];

//iterating over the array 

//for..loop

//block scope of let and var differece here also you can see.
for(var i=0;i<array1.length;i++)
{
    console.log(array1[i])
}
console.log('i value in for loop if it is "var" :'+i)

for(let j=0;j<array1.length;j++)
    {
        console.log(array1[j])
    }
//  console.log('j value in for loop if it is "let" :'+j)  //ReferenceError: j is not defined


//for..of
for(let i of array1)
{
    console.log(i);
}

//for..in
for(let i in array1)
{
    console.log(i," "+array1[i]);
}


//forEach()
array1.forEach(function(x){
    console.log(x)
});

array1.forEach(x=>console.log(x));


//template literal
var city='pune';
var country='india';
var address=`${city},${country}`;
console.log(address);

var htmlCode=`y>
    <h1>This is hello html page
    </h1>
    <p>Hello this para</p>
    <p>Hello this para</p>
    <p>Hello this para</p>
    <p>Hello this para</p>
    <p>Hello this para</p>`;
console.log(htmlCode);


module.exports.xx1=x1;
module.exports.yy1=y1;