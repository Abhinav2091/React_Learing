"use strict";
var Customer = /** @class */ (function () {
    function Customer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
//create a instance of class
// let customer = new Customer();
// customer.firstame = "Abhinav";
// customer.lastname = "Sharma";
var customer = new Customer("Abhinav", "Sharma");
console.log(customer.firstName);
console.log(customer.lastName);
