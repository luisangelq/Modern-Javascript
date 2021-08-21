console.log("************* .forEach and .map **************");

const basket3 = [
    {name: "Earphones", price: 500},
    {name: "Television", price: 3500},
    {name: "Tablet", price: 1200},
    {name: "Board", price: 600},
]

basket3.forEach((reminder, index) => {
    console.log(index, reminder)
} )

console.log("\nMap can save valuen in a variable");

const newBasket = basket3.map((reminder, index) => {
   return index, reminder
} )

console.log(newBasket);
