'use strict';

var _Employee = require('./Employee.js');

var _Employee2 = _interopRequireDefault(_Employee);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var add = function add(x, y) {
  return x + y;
};
window.employee = new _Employee2.default({ id: 100 });

var _employee = employee;
var id = _employee.id;
var name = _employee.name;

console.log('employee id = ' + id + ' employee name = ' + name);