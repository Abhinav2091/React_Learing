class Customer {


    constructor( private _firstName:string, private _lastName:string){
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
console.log(customer.firstName);
console.log(customer.lastName);