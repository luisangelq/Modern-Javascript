console.log("*****Promises******");

const applyDiscount = new Promise((resolve, reject) => {

    const discount = true;

    if (discount) {
        resolve("Discount Applied");
    } else {
        reject("Discount not applied");
    }
}).then((result) => {
    discount(result);
}).catch((error) => {
    console.log(error);
});

console.log(applyDiscount);

const discount = (message) => {
    console.log(message);
};

//There are 3 possible results of the promise
// fullfilled, rejected, pending