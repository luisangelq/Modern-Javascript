console.log("****** Implicit Binding ************");

const user = {
    name: "John",
    age: 30,
    info() {
        console.log(`Name: ${this.name} Age: ${this.age}`);
    },

    pet: {
        name: "Fido",
        type: "dog",
        info() {
            console.log(`Name: ${this.name} Type: ${this.type}`);
        }
    }
};

user.info();
user.pet.info();