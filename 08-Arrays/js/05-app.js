console.log("*********Imperative Functions to add values to an array*********");

const car = [];

//Define product
const product = {
    name: "Iphone XS",
    price: 15000
}

const product2 = {
    name: "Xiaomi Note 11",
    price: 5200
}

const product3 = {
    name: "Samsung A3",
    price: 7500
}

//Add values at the end
car.push(product, product2);

//Add values at the begining
car.unshift(product3)

console.table(car);