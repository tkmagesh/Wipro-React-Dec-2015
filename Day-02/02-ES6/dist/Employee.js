"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var idSymbol = Symbol();
var nameSymbol = Symbol();

var Employee = (function () {
    function Employee(id, name) {
        _classCallCheck(this, Employee);

        this[idSymbol] = id;
        this[nameSymbol] = name;
    }

    _createClass(Employee, [{
        key: "display",
        value: function display() {
            console.log(this.id, this.name);
        }
    }, {
        key: "id",
        set: function set(value) {
            console.log("setting id");
            this[idSymbol] = value;
        },
        get: function get() {
            console.log("getting id");
            return this[idSymbol];
        }
    }, {
        key: "name",
        get: function get() {
            return this[nameSymbol];
        }
    }]);

    return Employee;
})();

exports.default = Employee;