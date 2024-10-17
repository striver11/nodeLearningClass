const events=require('events')

const fs=require('fs');

const event1=new events.EventEmitter();

event1.on("addition",()=>{
    console.log("Addition event raised!");
})

event1.on("addition",(n1,n2)=>{
    console.log("Sum :"+(n1+n2))
})

event1.emit("addition");

event1.emit("addition",10,20)

event1.emit("addition",40,50)

console.log('Todal listeners :'+event1.listenerCount("addition"))










////////// eventStream

const fsreadstream=fs.createReadStream("file3.txt",'utf-8');

var data='';
fsreadstream.on("open",()=>{
    console.log('file is opened')
})

fsreadstream.on("data",chunk=>{
    console.log('Data is being read : ')
    data=data+chunk
})


fsreadstream.on("end",()=>{
    console.log(data)
})

