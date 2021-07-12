console.log("**********Methods in classes********");
//Class decaration
class Client {
    constructor(name = "Luis", balance){
        this.name = name;
        this.balance = balance;
    }

    clientType(membership) {
        return `${this.name} has a ${membership} membership and $${this.balance}`
    }

    static welcome() { // Dont require instance, belongs to the class
        return `Welcome Guest`
    }
}
console.log(Client.welcome());

const luis = new Client(undefined, 500);
console.log(luis.clientType("Diamond")); 

console.log(luis);



//Class expression
const Client2 = class {
    constructor(name, balance){
        this.name = name;
        this.balance = balance;
    }
}
const gaby = new Client2("Gabriela", 1300);
console.log(gaby);