console.log("*************Arrow Functions****************");

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