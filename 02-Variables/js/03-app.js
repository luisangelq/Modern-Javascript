//with const you can't reassign 
const product = "24 inches display";
console.log(product);
product = 20;
console.log(product);

//You cannot initialize without a value and assign later
const available;
available = true;

available = false;

//Initialize multiple variables
const category = "Cellphones",
    brand = "Xiaomi",
    rating = 5