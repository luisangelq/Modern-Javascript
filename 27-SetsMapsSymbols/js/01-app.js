console.log("*********** Sets ***********");

//Allow you to create a list without repeat values
const numbers = [10, 20, 25, 10, 20, 10];
const uniqueNumbers = new Set(numbers);
console.log(uniqueNumbers);

const car = new Set();
car.add("BMW");
car.add("Audi");
car.add("Mercedes");

car.delete("BMW");

// car.clear();

console.log(car);
//Number of values in the set
console.log(car.size);
//Check if the set contains a value
console.log(car.has("BMW", "Audi"));

//sets are iterateable
car.forEach( product => {
    console.log(product);
} );

