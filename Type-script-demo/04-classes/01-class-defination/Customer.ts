class Customer {
    firstName: string; //by default this are public
    lastName: string;

    constructor(firstName:string,lastName:string)
    {
        this.firstName=firstName;
        this.lastName=lastName;
    }


}

//create a instance of class
// let customer = new Customer();
// customer.firstame = "Abhinav";
// customer.lastname = "Sharma";

let customer = new Customer("Abhinav","Sharma");

console.log(customer);