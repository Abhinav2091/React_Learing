class Customer {
    private _firstName: string; //by default this are public
    private _lastName: string;

    constructor(firstName:string,lastName:string){
        this._firstName=firstName;
        this._lastName=lastName;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

    public get firstName(): string {
        return this._firstName;
    }
    public set firstName(firstName: string) {
        this._firstName = firstName;
    }


}

//create a instance of class
// let customer = new Customer();
// customer.firstame = "Abhinav";
// customer.lastname = "Sharma";

let customer = new Customer("Abhinav","Sharma");
customer.firstName="Changed";
customer.lastName="Name";
console.log(customer.firstName);
console.log(customer.lastName);