console.log("***** Curryng and Partials*****");

//currying divide function that takes more that one parameter

const sum5 = (a, b, c, d, e) => a + b + c + d + e;

const partialSum5 = a => (b, c) => (d, e) => a + b + c + d + e;

// const firsNum = partialSum5(5);
// const secNum = firsNum(6,7);
// const result5 = secNum(8,9);

const result5 = partialSum5(5)(6,7)(8,9);

console.log(result5);