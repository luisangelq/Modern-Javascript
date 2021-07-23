console.log("*********** weakmaps ************");

const product = {
    name: "iPhone 6",
    price: 699
};

const weakmap = new WeakMap();

weakmap.set(product, "I'm the product");

console.log(weakmap.has(product));
console.log(weakmap.get(product));

console.log(weakmap);