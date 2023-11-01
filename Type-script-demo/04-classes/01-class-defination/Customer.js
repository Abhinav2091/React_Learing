var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
//create a instance of class
// let customer = new Customer();
// customer.firstame = "Abhinav";
// customer.lastname = "Sharma";
var customer = new Customer("Abhinav", "Sharma");
console.log(customer);
