console.log("*********** weaksets ***********");

//You only can pass it objects
const weakSets = new WeakSet();

const client = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        country: "USA"
    }
}

weakSets.add(client);
weakSets.add(client.address);

console.log(weakSets);