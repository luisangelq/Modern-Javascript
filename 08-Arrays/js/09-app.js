console.log("*************for, forEach, map in Arrays****************");

const basket = [
    {name: "Earphones", price: 500},
    {name: "Television", price: 3500},
    {name: "Tablet", price: 1200},
    {name: "Board", price: 600},
    {name: "Mouse", price: 350},
    {name: "Display", price: 4200},
]

console.log("==========Using for loop========");
for(let i = 0; i < basket.length; i++ ){
    console.log(`${basket[i].name} -> $${basket[i].price}`);
}

console.log("==========Using forEach loop========");
basket.forEach( (product) => {
    console.log(`${product.name} -> $${product.price}`);
})

//map create a new array and i can save the result in a variable
console.log("==========Using map loop========");
const useMap = basket.map( (product) => {
    return `${product.name} -> $${product.price}`;
})
console.log(useMap);

basket.map( (product) => {
    console.log(`${product.name} -> $${product.price}`);
})

