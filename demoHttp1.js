const http=require('http');
// does it have https module and what will be the difference between http and https
const PORT=3000;

const emp=require('./employee').getEmployee

var employees=[
    {"empId":101,"empName":"Rahul","salary":10000},
    {"empId":102,"empName":"Karthik","salary":15000},
    {"empId":103,"empName":"Rajesh","salary":20000}
]

const server=http.createServer((req,res)=>{
    res.writeHead(200,{'constent-type':'text/html'})
    console.log('inside server')
    res.write("<h1>Welcome to My Web Application</h1>")
    res.write(`<hr><p>This is node js</hr></p>
        <p>Node js HTTPS code</p>
        <p>Node js HTTPS code</p>
        <p>Node js HTTPS code</p>
        <p>Node js HTTPS code</p>`)

       // res.write(`Employee Details <hr> ${emp()[0].empdId+" "+emp()[0].empName+" "+emp()[0].salary}`)

       res.write(JSON.stringify(emp()))

       res.write(`<table border=1 style=margin:auto><caption style=font-size:20px >Employee Details</caption>
        <th>Employee id</th><th>Employee Name</th><th>Employee Salary</th>`)
        for(let em of emp())
        {
            res.write(`<tr><td>${em.empId}</td>
                        <td>${em.empName}</td>
                        <td>${em.salary}</td></tr>`);
        }

        res.write('**********************************Table 2***********************************************************')

        res.write(`<table border=1 style=margin:auto><caption style=font-size:20px >Employee Details</caption>
            <th>Employee id</th><th>Employee Name</th><th>Employee Salary</th>`)

        emp().forEach((em)=>{
            res.write(`<tr><td>${em.empId}</td>
                <td>${em.empName}</td>
                <td>${em.salary}</td></tr>`);
        })
        res.write(`</table>`)
        res.write('*********************************End of Page ***************************************')
    
    res.end();

  //  res.write('*********************************End of Page ***************************************')
})


server.listen(PORT,()=>{
    console.log(`server started at Port :${PORT}`);
})

