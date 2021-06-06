console.log("*******************(This) in objects**********************");


//"this" allows you to search for the properties within the same object

const product10 = {
    // llave || Valor
    name1: "Redmi Note 10",
    price: 4200,
    available: false,
    showInfo: function() {
        console.log(`Product: ${this.name1} costs: ${this.price}`);
    }
}

product10.showInfo();