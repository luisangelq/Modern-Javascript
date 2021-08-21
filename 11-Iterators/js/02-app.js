console.log("************* Break and Continue in For Loop **************");

for (let i = 0; i <= 5; i++) {
    if (i === 3) {
        console.log("Three (break here)");
        break; //Rompe el ciclo
    }
    console.log(`Number: ${i}`);
}

console.log(" ");
const basket2 = [
    {name: "Earphones", price: 500},
    {name: "Television", price: 3500},
    {name: "Tablet", price: 1200},
    {name: "Board", price: 600, discount: 200},
    {name: "Mouse", price: 350},
    {name: "Display", price: 4200},
]

for( i = 0; i < basket2.length; i++){
    if (basket2[i].discount) {
        console.log(`${basket2[i].name} has $${basket2[i].discount} of discount`);
        continue; //continua sin listar el valor
    }
    console.log(basket2[i].name);
}
