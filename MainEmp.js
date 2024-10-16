const empData = require('./employee');

// Display all employees
console.log(empData.getEmployee());

// Iterate over all employees and print their details
for (let emp of empData.getEmployee()) {
    console.log(emp.empId + ' ' + emp.empName + ' ' + emp.salary);
}

// Fetch and display employee by ID
var empid = 101;
let empDetail = empData.getEmployeeById(empid);  // Pass empid directly to getEmployeeById

if (empDetail) {
    console.log(`Employee Name of ${empid}: ${empDetail.empName}`);
} else {
    console.log(`Employee with ID ${empid} not found.`);
}
