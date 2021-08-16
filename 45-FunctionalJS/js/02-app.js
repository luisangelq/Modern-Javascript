console.log("****** Functions as arguments **********");

const sum2 = (a, b) => a + b;
const multy = (a, b) => a * b;

const sumOrMulty = fn => fn(10,20);

console.log(sumOrMulty(sum2));