console.log("*******************Object Constructor**********************");

//Object Literal
const product11 = {
    // llave || Valor
    name1: "Redmi Note 10",
    price: 4200,
    available: false,
}

console.log(product11);

//Object Constructor
//this was POO in javascript before classes
function Product(name, price) {
    this.name = name;
    this.price = price;
    this.available = true;
}

const product_1 = new Product("Iphone 12 Max", 25000)
console.log(product_1);
