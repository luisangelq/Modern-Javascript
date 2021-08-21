console.log("\n***** Singleton ******");

// Singleton does not allow you to create multiple instances of the same class.
//Prevent multiple instances of the same class from being created.

let singleton = null;

class Product {
  constructor(name, price) {
    if (!singleton) {
      this.name = name;
      this.price = price;
      singleton = this;
    } else {
      return singleton;
    }
  }
}

const p1 = new Product("iPhone", 1000);
const p2 = new Product("Samsung", 2000);

console.log(p1);
console.log(p2);
