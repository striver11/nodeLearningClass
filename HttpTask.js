const http=require('http')
const fs=require('fs')
const PORT=3000;

const header=require('./appnamemodule.js')
const body=require('./descriptionmodule.js')
const footer=require('./footermodule.js')

const server=http.createServer((req,res)=>{
    res.write(`<h1>${header.appName}</h1>`)

    res.write(`<h1>${body.disctiption}</h1>`)

    res.write(`<h1>${footer.footer}</h1>`)

    res.end()

})



server.listen(PORT,()=>{
    console.log(`server started a Port :${PORT}`)
})