console.log("************* For Loops **************");


for (let i = 0; i <= 5; i++) {
    if (i % 2 === 0) {
        console.log(`Even Number: ${i}`);
        
    }
    if (i % 2 === 1) {
        console.log(`Odd Number: ${i}`);
    }
    
}

const basket = [
    {name: "Earphones", price: 500},
    {name: "Television", price: 3500},
    {name: "Tablet", price: 1200},
    {name: "Board", price: 600},
    {name: "Mouse", price: 350},
    {name: "Display", price: 4200},
]

for( i = 0; i < basket.length; i++){
    console.log(basket[i]);
}