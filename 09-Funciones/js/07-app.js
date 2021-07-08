console.log("*************Arrow Functions****************");


/*Diferences between function and arrow functions: 
function: search in the actual object
arrow function: search in the global window
*/
const normalFunction = function(type) {
    console.log(`${type} function expression`);
}
normalFunction("Normal");

const arrowFunction = type => {
    console.log(`${type} function`);
}
arrowFunction("Arrow");


hola = () => {
    console.log("Hola");
}
hola()