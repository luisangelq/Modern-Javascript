console.log("*************Array Destructuring****************");


const ages = [10, 20, 30, 40, 50];

//It depends on its position
const [first, , third, ...rest] = ages;

console.log(ages);

console.log(`first: ${first}, third: ${third}, Rest with Spread: ${rest} `);