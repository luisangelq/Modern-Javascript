console.log("************Scroll Event************");

window.addEventListener("scroll", () => {
    const premium = document.querySelector(".premium")
    const location = premium.getBoundingClientRect();

    // console.log(location);
    if (location.top < 770 && location.top > -360) {
        console.log("Is visible");
    }else {
        console.log("Is not visible");
    }
})