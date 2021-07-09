console.log("*******Inherit prototype********");

function Person(name, balance, phone) {
  //we can inherit from another object 
  Client3.call(this, name, balance)
  this.phone = phone;
}
Person.prototype = Object.create( Company3.prototype )
Person.prototype.constructor = Company3;

Person.prototype.personPhone = function() {
    return this.phone
}

const karina = new Person("Karina", 400500, 3326264356);
console.log(`${karina.companyLoyal()} and the phone is ${karina.personPhone()}`);
