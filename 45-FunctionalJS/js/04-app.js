console.log("**** .map *****");

const getNames = item => item.name;

const resultMap = basket.map(getNames);
console.log(resultMap); 