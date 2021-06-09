console.log("*************return in functions****************");

//save de value in a variable 

let result = 0;

function product(price) {
    return result += price;
}

function subTotal(products) {
    return  result * 1.16;
}

result = product(600)
result = product(400)

const total = subTotal(result);

console.log(`Your total is $${total}`);
 