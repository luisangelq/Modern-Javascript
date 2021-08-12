console.log("****** First Class Functions ********");

//assing a function to a variable as a value
const sum = function(a, b) {
    return a + b;
}

const result = sum;

console.log(result(1, 2));