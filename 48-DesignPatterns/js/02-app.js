console.log("\n******* Contstructor Pattern *******");

// inheirtance of the object

class People {
    constructor(name, age) {

        this.name = name;
        this.age = age;
    }
}

class Client extends People {
    constructor(name, age, company) {
        super(name, age);
        this.company = company;
    }
}

const client = new Client("John", 30, "Google");
console.log(client);
