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
class Company extends Client3 {

}