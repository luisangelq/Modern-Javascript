console.log("*******************Destructuring to nested objects**********************");

//Object Literal
const product5 = {
    // llave || Valor
    name1: "Redmi Note 10",
    price: 4200,
    available: false,

    info : {
        sizes: {
            weight: "180gr",
            high: "2.15 Inches"
        },
        made: {
            country: "China"
        }
    }
}

const {name1, info, info: { made: {country} }} = product5;

console.log(name1);
console.log(info);
console.log(country);