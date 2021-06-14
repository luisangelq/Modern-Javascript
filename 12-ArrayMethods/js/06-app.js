console.log("************* .every **************");

//return boolean if all meet the condition
const everyResult = basket.every( product => product.precio < 1000)
console.log(everyResult);