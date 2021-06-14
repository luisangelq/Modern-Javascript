console.log("************* .reduce **************");

//

let total = 0;
basket.forEach((product) => total += product.precio)
console.log(total);


let result2 = basket.reduce((total2, product2) => total2 + product2.precio, 0);
console.log(result2);
