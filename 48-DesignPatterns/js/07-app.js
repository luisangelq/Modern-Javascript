console.log("\n****** NameSpace Pattern ******");

const restaurantApp = {};

restaurantApp.dishes = [
  {
    name: "Pizza",
    price: 120,
    ingredients: ["cheese", "pepperoni", "sauce"],
  },
  {
    name: "Burguer",
    price: 80,
    ingredients: ["meat", "tomato", "onion", "lettuce"],
  },
  {
    name: "HotDog",
    price: 25,
    ingredients: ["sausage", "chilli", "sauce"],
  },
];

restaurantApp.functions = {
  getDishes: (dishes) => {
      console.log("* Welcome to our menu *");
    dishes.forEach((dish, index) => {
      console.log(`${index} : ${dish.name} - $${dish.price}`) ;
    });
  },
};

restaurantApp.functions.getDishes(restaurantApp.dishes);
