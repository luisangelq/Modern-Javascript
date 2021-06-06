console.log("*******************Destructuring**********************");

//Object Literal
const product3 = {
    // llave || Valor
    name: "Redmi Note 10",
    price: 4200,
    available: false,
}

const { name, price, available } = product3

console.log(`${name} is ${available ? "Available" : "Not Available"} and cost $${price}`);
