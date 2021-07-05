console.log("***********Read and convert data from Local Storage***********");

const name = localStorage.getItem("name")
const productJSON = JSON.parse(localStorage.getItem("product")) 
console.log(name);
console.log(productJSON);