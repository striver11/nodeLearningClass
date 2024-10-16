var employees=[
    {"empId":101,"empName":"Rahul","salary":10000},
    {"empId":102,"empName":"Karthik","salary":15000},
    {"empId":103,"empName":"Rajesh","salary":20000}
]

module.exports.getEmployee=()=>employees;


module.exports.getEmployeeById=empNo=>{
    return employees.find(emp=>emp.empId==empNo)
}