console.log("**********Inherit classes********");
//Class decaration
class Company {
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }

    clientType(membership) {
        return `${this.name} has a ${membership} membership and $${this.balance}`
    }
}

//Inherit 
class Client3 extends Company {
    constructor(name, phone, email, balance){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.balance = balance;
    }
}

const umbralApps = new Company("Umbral Apps", 85000)
const jose = new Client3("Jose", 1500)

console.log(jose.clientType("Platinum"));