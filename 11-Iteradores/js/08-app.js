console.log("\n************* for ..in **************");

//works for objects
const car = {
    model: "Camaro",
    year: 1969,
    engine: "6.0"
}

for( let property in car){
    console.log(`${property}: ${car[property]}`);
}

console.log(" ");
for( let [key, value] of Object.entries(car)){
    console.log(`${key}: ${value}`);
}