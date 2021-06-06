console.log("*******************Object within another object**********************");

//Object Literal
const product4 = {
    // llave || Valor
    name: "Redmi Note 10",
    price: 4200,
    available: false,

    info : {
        sizes: {
            weight: "180gr",
            high: "2.15 Inches"
        },
        made: {
            country: "China"
        }
    }
}

console.log(product4.info);