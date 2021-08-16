console.log("***** Higher order functions *****");

//like filter 

const basket = [
    { name: 'Monitor 20 Pulgadas', price: 500},
    { name: 'Televisión 50 Pulgadas', price: 700},
    { name: 'Tablet', price: 300},
    { name: 'Audifonos', price: 200},
    { name: 'Teclado', price: 50},
    { name: 'Celular', price: 500},
    { name: 'Bocinas', price: 300},
    { name: 'Laptop', price: 800},
];


// const result2 = basket.filter( item => item.price > 500 );

// console.log( result2 );

const mayor400 = (item) => item.price != 500;

const result3 = basket.filter( mayor400 );

console.log( result3 );



