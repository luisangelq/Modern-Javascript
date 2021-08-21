import showClient from "./05-app.js";
showClient("Hello from 06-app");

console.log("\n****** Mixin Pattern ******");

class Distributor {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class Clients extends Distributor {
  constructor(name, email, phone, distributor) {
    super(name, email);
    this.phone = phone;
    this.distributor = distributor;
  }
}

const personFunctions = {
  showInfoDist() {
    console.log(`Name: ${this.name}\nEmail: ${this.email}`);
  },

  showInfoUF() {
    console.log(
      `Name: ${this.name}\nEmail: ${this.email}\nPhone: ${this.phone}\nDistributor: ${this.distributor}`
    );
  },
};
//add the functions to the prototype
Object.assign(Distributor.prototype, personFunctions);
Object.assign(Clients.prototype, personFunctions);

const distributor = new Distributor("Carlos Lomeli", "lomeli@gmail.com");
const distributor2 = new Distributor("Ayde Dorantes", "dorantes@gmail.com");

const client1 = new Clients(
  "Luis Angel",
  "luis.quinones@contpaqi.com",
  3326264356,
  distributor.name
);
const client2 = new Clients(
    "Carlos Espinoza",
    "carlos.espinoza@contpaqi.com",
    3356268945,
    distributor2.name
  );


console.log(distributor);
distributor.showInfoDist();
client1.showInfoUF();
client2.showInfoUF();
