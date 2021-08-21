console.log("******* Class Pattern ******");

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }   
}

const person1 = new Person("John", 30);
const person2 = new Person("Mary", 25);

console.log(person1);
console.log(person2);