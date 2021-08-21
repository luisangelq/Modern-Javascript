import { Client } from "./cliente.js";

class Company extends Client {
  constructor(name, age, category, email, phone, address, password) {
    super(name, age);
    this.category = category;
    this.address = address;
    this.phone = phone;
    this.email = email;
    this.password = password;
  }

  showInfo() {
    return `Company: ${this.name}, Age: ${this.age}, Category: ${this.category}, Email: ${this.email}, Phone: ${this.phone}, Address: ${this.address}`;
  }
}

export { Company };
