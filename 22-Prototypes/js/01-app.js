console.log("*******proto and object constructor********");

const client = {
    name: "Luis",
    balance: 500
}
console.log(client);


//Allows you to create dinamic objects
function Client(name, balance) {
    this.name = name;
    this.balance = balance
}

const fede = new Client("Fede", 1000);

console.log(fede);

