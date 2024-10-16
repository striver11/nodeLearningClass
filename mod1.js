const PI=3.14;
const length=5;
const breath=8;


var calculateArea=function(){
    return length*breath;
};


// module.exports.PI=PI;

//module.exports.getArea=calculateArea;

module.exports={PI,calculateArea}