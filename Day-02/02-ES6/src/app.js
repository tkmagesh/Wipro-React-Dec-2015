import Employee from './Employee.js'
var add = (x,y) => { return x + y; }
window.employee = new Employee({id : 100});

let {id, name} = employee;
console.log(`employee id = ${id} employee name = ${name}`);

