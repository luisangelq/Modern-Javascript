console.log("*******Execute Full Screen*********"); 

const openBtn = document.querySelector("#open-full-screen");
const exitBtn = document.querySelector("#exit-full-screen");

openBtn.addEventListener("click", () => {
    document.documentElement.requestFullscreen();
})
exitBtn.addEventListener("click", () => {
    document.exitFullscreen();
})