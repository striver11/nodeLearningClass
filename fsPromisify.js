const fs=require('fs')
const util=require('util')

var fsreadfile=util.promisify(fs.readFile)

fsreadfile("file3.txt",'utf-8')
.then(data=>{
    console.log(data)
})
.catch(err=>{
    console.log(err)
})