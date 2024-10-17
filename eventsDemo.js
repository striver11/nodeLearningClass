const events=require('events')

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