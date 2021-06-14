console.log("************* .some **************");


const months = ['January', 'February', 'March', 'April', 'May'];

const basket = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
]

months.forEach((month) => {
    if (month === "January") {
        console.log("January Exist");
    }
});

//Includes solo puede buscar en arreglos simples
const result = months.includes("March");
console.log(result);

//Some puede buscar en objetos
const exist = basket.some((product) => {
    return product.nombre === "Tablet"
})

console.log(exist);