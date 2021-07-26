const clientName = "Luis";
const clientAge = 27;

const showInformation = (name, age) => {
  return `${name} is ${age} years old`;
};

const balance = (amount) => {
  if (amount > 0) {
    return `, balance ${amount} is positive`;
  } else {
    return `, balance ${amount} is negative`;
  }
};

class Client {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getFullName() {
    return `${this.name} ${this.age}`;
  }
  setBalance(amount) {
    this.balance = amount;
  }
}

export { clientName, clientAge, showInformation, balance, Client };
