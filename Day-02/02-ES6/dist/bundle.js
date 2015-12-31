(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var idSymbol = Symbol();
var nameSymbol = Symbol();

/*
export default class Employee{
    
    constructor(id, name){
        this[idSymbol] = id;
        this[nameSymbol] = name;
    }
    set id(value){
        console.log("setting id");
        this[idSymbol] = value;
    }
    get id(){
        console.log("getting id");
        return this[idSymbol];
    }
    
    get name(){
        return this[nameSymbol];
    }
    display(){
        console.log(this.id, this.name);
    }
}
*/

function Employee() {
    var defaults = arguments.length <= 0 || arguments[0] === undefined ? { id: -1, name: '[default name]' } : arguments[0];

    this.id = defaults.id;
    this.name = defaults.name;
}

Employee.prototype.display = function () {
    console.log(this.id, this.name);
};

exports.default = Employee;
},{}],2:[function(require,module,exports){
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
},{"./Employee.js":1}]},{},[2]);
