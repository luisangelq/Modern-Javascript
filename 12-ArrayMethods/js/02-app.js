console.log("************* .findIndex **************");

months.forEach((month, i) => {
    if (month === "April") {
        console.log(`${month} is in the ${i} index`);
    }
})

const index = months.findIndex( month => month === "December");
console.log(index);

const index2 = basket.findIndex( product => product.precio === 100);
console.log(index2);