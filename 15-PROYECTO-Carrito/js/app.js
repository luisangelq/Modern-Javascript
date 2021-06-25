document.addEventListener("DOMContentLoaded", () => {
    coursesList.addEventListener("click", addCourse);
})

//Variables
const basket = document.querySelector("#carrito");
const basketContainer = document.querySelector("#lista-carrito tbody")
const clearBasketBtn = document.querySelector("#vaciar-carrito")
const coursesList = document.querySelector("#lista-cursos")


//functions
const addCourse = (e) => {
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")) {

        const takeData = e.target.parentElement.parentElement;
        
        readCourseInfo(takeData);
    }
}

const readCourseInfo = (info) => {
    console.log(info);
}

