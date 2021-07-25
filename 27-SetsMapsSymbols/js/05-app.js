console.log("*********** Symbols ************");

//Allows you to create a unique property 
//there cannot be 2 alike

const sym = Symbol();
const sym2 = Symbol();

if (sym === sym2) {
    console.log("Symbols are the same");
    
} else {
    console.log("Symbols are different");
}

const name = Symbol();
const lastName = Symbol();

const person1 = {}

person1[name] = "John";
person1[lastName] = "Doe";
person1.clientType = "Premium";
person1.age = 30;

console.log(person1);
console.log(person1[name]);