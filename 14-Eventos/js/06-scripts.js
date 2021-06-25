console.log("************Event Bubbling************");

//Propagacion del evento
const cardDiv = document.querySelector(".card")
const infoDiv = document.querySelector(".info")
const title = document.querySelector(".titulo")

cardDiv.addEventListener("click", (e) => {
    e.stopPropagation(); // < - Whit this we can stop the propagation
    console.log("Click Card");
})

infoDiv.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Click Info");
})

title.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("Click Title");
})