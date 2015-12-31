const idSymbol = Symbol();
const nameSymbol = Symbol();

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

function Employee(defaults = {id : -1, name : '[default name]'}){
    this.id = defaults.id;
    this.name = defaults.name;
}

Employee.prototype.display = function(){
    console.log(this.id, this.name);
}

export default Employee;
