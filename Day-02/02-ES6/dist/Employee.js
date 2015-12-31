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