"use strict";

console.log("*******************Seal Objects - use Strict**********************");


const product8 = {
    // llave || Valor
    name1: "Redmi Note 10",
    price: 4200,
    available: false,
}

//This only works if you write "use strict";
Object.seal(product8)

//Doesnt allow you to add or delete properties inside of an object
//you Change values only
product8.available = true;

// delete product8.price;

console.log(product8);

console.log("Is sealed? " + Object.isSealed(product8));
