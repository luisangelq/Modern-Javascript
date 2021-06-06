console.log("*******************Add, Delete Properties**********************");

//Object Literal
const product2 = {
    // llave || Valor
    name: "Redmi Note 10",
    price: 4200,
    available: true
}

//Add values to an object
product2.image = "image.jpg"

//Delete 
delete product2.available

console.log(product2);