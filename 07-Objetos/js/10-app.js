console.log("*******************Copy or Join Objects**********************");


const product9 = {
    // llave || Valor
    name1: "Redmi Note 10",
    price: 4200,
    available: false,
}

const sizes = {
    weight: "186g",
    heigh: "2.4 Inches"
}

const result = Object.assign(product9, sizes);

//Spread operator
const result2 = { ...product9, ...sizes}

console.log(result);
console.log("Using Spread operator ↓");
console.log(result2);