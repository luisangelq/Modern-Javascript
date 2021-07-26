console.log("**********Inherit classes********");

class Company {
    //How to declare pivate properties
    #name

    constructor(name, balance){
        this.#name = name;
        this.balance = balance;
    }

    clientType(membership) {
        return `${this.#name} has a ${membership} membership and $${this.balance} phone: ${this.phone}`
    }
}

//Inherit 
class Client3 extends Company {
    constructor(name, balance, phone, email){
        super(name, balance)
        this.phone = phone;
        this.email = email;
        this.balance = balance;
    }
}

const umbralApps = new Company("Umbral Apps", 85000)
const jose = new Client3("Jose", 1500, 3326264356, "jose@gmail.com")

console.log(jose.clientType("Platinum"));
console.log(umbralApps);