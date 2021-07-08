console.log("*******Creating Prototypes********");

function Client3(name, balance) {
  this.name = name;
  this.balance = balance;
}

Client3.prototype.clientType = function (membership) {
  console.log(`Client ${this.name} has a ${membership} membership`);
};

function Company3(name, balance, category) {
  this.name = name;
  this.balance = balance;
  this.category = category;
}
Company3.prototype.companyType = function () {
  let type;

  if (this.balance > 50000) {
    type = "Platinum"; 
  } else if (this.balance > 25000) {
    type = "Gold";
  } else {
    type = "Silver";
  }

  return type;
};
//We can call other prototypes
Company3.prototype.companyLoyal = function() {
    if (this.companyType() == "Platinum") {
        return `Company ${this.name} has a ${this.companyType()} membership and has loyalty`
    }else {
        return `Company ${this.name} has a ${this.companyType()} membership and has no loyalty`
    }
}
Company3.prototype.withdraw = function (money) {
    this.balance -= money
}

//Instance
const blanca = new Client3("Yair", 6000);
blanca.clientType("Diamond");
console.log(blanca);

const umbralHealth = new Company3("Umbral Health", 40000, "Health");
console.log(umbralHealth.companyLoyal());
umbralHealth.withdraw(20000)
console.log(umbralHealth);