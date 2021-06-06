"use strict";

console.log("*******************Freeze Objects - use Strict**********************");


const product7 = {
    // llave || Valor
    name1: "Redmi Note 10",
    price: 4200,
    available: false,
}

//This only works if you write "use strict";
Object.freeze(product7)

//Doesnt allow you to change, add or delete anything inside of an object
// product7.available = true;

// delete product7.price;

console.log("Is frozen? " + Object.isFrozen(product7));
