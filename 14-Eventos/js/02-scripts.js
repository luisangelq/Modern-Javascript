console.log("************Mouse Events************");

const nav = document.querySelector(".navegacion");

//Regiter an event
nav.addEventListener("click", () => {
    console.log("Click en nav");
})

nav.addEventListener("mouseenter", () => {
    console.log("Entering nav");

    nav.style.backgroundColor = "blue";
})

nav.addEventListener("mouseout", () => {
    console.log("Exiting nav");

    nav.style.backgroundColor = "red";
})

nav.addEventListener("dblclick", () => {
    console.log("Double Click en nav");
})