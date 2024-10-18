const http=require('http')
const fs=require('fs').promises
const PORT=3000;

const header=require('./appnamemodule.js')
const body=require('./descriptionmodule.js')
const footer=require('./footermodule.js')

const server=http.createServer((req,res)=>{
    res.write()

    res.end()

})



server.listen(PORT,()=>{
    console.log(`server started a Port :${PORT}`)
})