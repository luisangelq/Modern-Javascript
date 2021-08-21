console.log("*************Function Expression and Function Declaration****************");

/*Javascript has something called hoisting
    first -> Initialisation or reading
    second -> Excecution or Usage
*/


//Function Declaration
sum();
function sum() {
    console.log("This is a Function Declaration");
}


//Function Expression
const expression = function() {
    console.log("This is a Function Expression");
}
expression();