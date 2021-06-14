console.log("************* .filter **************");

//filtra por lo que busques
let result3 = basket.filter( product => product.precio > 300)

let result4 = result3.reduce((total2, product2) => total2 + product2.precio, 0);

let result5 = basket.filter(product => product.nombre === "Tablet");

console.log(result3);
console.log(result4);
console.log(result5);