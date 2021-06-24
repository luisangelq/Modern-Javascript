console.log("\n \n************Select class and id by querySelector************");

const card = document.querySelector(".card")
const cards = document.querySelectorAll(".card")

console.log(card);
console.log(cards);

//specific selectors
const info = document.querySelector(".premium .info")

//being more specific
const secondCard = document.querySelector(".hospedaje .card:nth-child(3)")
console.log(secondCard);

const form2 = document.querySelector("#formulario")
console.log(form2);