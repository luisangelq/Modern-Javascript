console.log("************* .find **************");

//filtra por el valor que se busca y se asigna a la variable cuando encuenta alguno

const findResult = basket.find( product => product.nombre === "Tablet")
console.log(findResult);