const http=require('http');
// does it have https module and what will be the difference between http and https
const PORT=3000;

const server=http.createServer((req,res)=>{
    console.log('inside server')
    res.end();
})

server.listen(PORT,()=>{
    console.log(`server started at Port :${PORT}`);
})