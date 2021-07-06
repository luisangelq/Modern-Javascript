document.addEventListener("DOMContentLoaded", () => {
  coursesList.addEventListener("click", addCourse);
  selectBasket.addEventListener("click", deleteCourse);
  clearBasketBtn.addEventListener("click", () => {
    basket = []; 
    basketHTML();
  })
  basket = JSON.parse(localStorage.getItem("basket")) || [];
  basketHTML();
});

//Variables
const selectBasket = document.querySelector("#carrito");
const basketContainer = document.querySelector("#lista-carrito tbody");
const clearBasketBtn = document.querySelector("#vaciar-carrito");
const coursesList = document.querySelector("#lista-cursos");

let basket = [];

//hit button and take the data
const addCourse = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const takeData = e.target.parentElement.parentElement; //taking class = "card"

    readCourseInfo(takeData);
  }
};

//create the obj and validation
const readCourseInfo = (info) => {
  const infoCourse = {
    id: info.querySelector("a").getAttribute("data-id"),
    image: info.querySelector("img").src,
    title: info.querySelector(".info-card h4").textContent,
    price: info.querySelector(".precio span").textContent,
    quantity: 1,
  };

  if (basket.some( course => course.id === infoCourse.id)) {
      const courses = basket.map( course => {
          if (course.id === infoCourse.id) {
              course.quantity++;
              return course
          } else {
              return course
          }
      })

      basket = [...courses]
  } else {
    basket = [...basket, infoCourse];
    console.log(basket);  
  }

  basketHTML();
};

//Show in the basket
const basketHTML = () => {
  //clean HTML
  // basketContainer.innerHTML = "";

  while (basketContainer.firstChild) {
    basketContainer.removeChild(basketContainer.firstChild);
  }

  basket.forEach((course) => {
    const {image, title, price, quantity, id} = course
    const row = document.createElement("tr");

    row.innerHTML = `
            <td><img src= ${image} width="100"></td>
            <td>${title}</td>
            <td>${price}</td>
            <td>${quantity}</td>
            <td> <a href="#" class="borrar-curso" data-id="${id}"> X </a></td>
        `;

    console.log(row);

    //Add HTML from basket to tbody
    basketContainer.appendChild(row);
  });
  //Sync with Local Storage
  storageSync();
};

//Save items in storage
const storageSync = () => {
  localStorage.setItem("basket", JSON.stringify(basket))
}

//Delete Course
const deleteCourse = (e) => {
  if (e.target.classList.contains("borrar-curso")) {
     const getId = e.target.getAttribute("data-id")

     if (basket.some( course => course.id === getId && course.quantity > 1)) {
      const courses = basket.map( course => {
          if (course.id === getId) {
              course.quantity--;
              return course
          } else {
              return course
          }
      })

      basket = [...courses]
  } else {
    basket = basket.filter( course => course.id !== getId)
  }

     basketHTML();
  }
}