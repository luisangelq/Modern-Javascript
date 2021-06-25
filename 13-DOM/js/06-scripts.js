console.log("************Traversing the DOM************");

const navigation = document.querySelector(".navegacion");

console.log(navigation);
console.log(navigation.childNodes); //Los espacios en blanco se consideran elementos
console.log(navigation.children); // Lista elementos reales

const card2 = document.querySelector(".card")
card2.children[1].children[1].textContent = "Traversing the DOM"

console.log(card2.children[1].children[1].textContent);

//Traversing from child to parent
console.log(card2.parentElement);

console.log(card2.nextElementSibling.nextElementSibling);
//
const lastCard = document.querySelector(".card:nth-child(4)")
console.log(lastCard.previousElementSibling);

console.log(navigation.firstElementChild);
console.log(navigation.lastElementChild);