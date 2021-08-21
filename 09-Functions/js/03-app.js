console.log("*************parameters and arguments in functions****************");

function suma(num1, num2) { // <- parameters
    console.log(num1 + num2);
}
suma(15, 20); //<- arguments


function greating(name = "Guest", last = "") {
    console.log(`Hello ${name} ${last}`);
}
greating("Default", "Parameters");