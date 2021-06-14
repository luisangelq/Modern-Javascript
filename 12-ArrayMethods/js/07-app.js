console.log("************* .concat **************");

const months2 = ["June", "July", "August"]
const months3 = ["September", "October"]

const conResult = months.concat( months2, months3)
console.log(conResult);

//spread Operator
const spreadResult = [...months, ...months2, ...months3];
console.log(spreadResult);