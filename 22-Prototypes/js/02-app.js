console.log("*******Problem using only object constructor******");

//if the project is big and more people are working on it probably they dont know what functions they should use and for that is when we use prototipes
function Client2(name, balance) {
    this.name = name;
    this.balance = balance
}
function Company(name, balance, category) {
    this.name = name;
    this.balance = balance;
    this.category = category;
}

const person1 = new Client2("Carlos", 1000);

const company1 = new Company("Umbral Apps", 50000, "Programming")

function formatClient(client) {
    const {name, balance} = client;
    return `Client ${name} has $${balance}`
}

function formatCompany(company) {
    const {name, balance, category} = company;
    return `Company ${name} in ${category} has $${balance} founds`
}

console.log(formatClient(person1));
console.log(formatCompany(company1));

