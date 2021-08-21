console.log("************How to Prevent Bubbling************");

//Delegation
const cardDiv2 = document.querySelector(".card")

cardDiv2.addEventListener("click", (e) => {
    if (e.target.classList.contains("titulo")) {
        console.log("You hit title");
    }
    if (e.target.classList.contains("precio")) {
        console.log("You hit Price");
    }
    if (e.target.classList.contains("card")) {
        console.log("You hit Card");
        
    }
})

