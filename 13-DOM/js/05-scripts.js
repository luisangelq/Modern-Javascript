console.log("************Modify CSS with JS************");

const header3 = document.querySelector("h1")
header3.style.backgroundColor = "red";
console.log(header3);

const addClass = document.querySelector(".card");
addClass.classList.add("new-class", "second-class")
addClass.classList.remove("card")
console.log(addClass);