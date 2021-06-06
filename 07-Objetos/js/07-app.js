console.log("*******************Problems with objects**********************");

//Object Literal
const product6 = {
    // llave || Valor
    name1: "Redmi Note 10",
    price: 4200,
    available: false,
}

//We can change values inside of an object

product6.available = true;

delete product6.price;

console.log(product6);