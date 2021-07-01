document.addEventListener("DOMContentLoaded", () => {
  showCars(cars);
  //fill select year
  fillSelect();

  brand.addEventListener("change", (e) => {
    searchData.brand = e.target.value
    carFilter()
    
  })
  year.addEventListener("change", (e) => {
    searchData.year = e.target.value
    carFilter()
  })
  minPrice.addEventListener("change", (e) => {
    searchData.minPrice = e.target.value
    console.log(e.target.value);
    
  })
  maxPrice.addEventListener("change", (e) => {
    searchData.maxPrice = e.target.value
    console.log(e.target.value);
    
  })
  doors.addEventListener("change", (e) => {
    searchData.doors = e.target.value
    console.log(e.target.value);
    
  })
  transmission.addEventListener("change", (e) => {
    searchData.transmission = e.target.value
    console.log(e.target.value);
    
  })
  color.addEventListener("change", (e) => {
    searchData.color = e.target.value
    console.log(e.target.value);
    console.log(searchData);
  })

  
  
});

//Variables

const brand = document.querySelector("#marca");
const year = document.querySelector("#year");
const minPrice = document.querySelector("#minimo")
const maxPrice = document.querySelector("#maximo")
const doors = document.querySelector("#puertas")
const transmission = document.querySelector("#transmision")
const color = document.querySelector("#color")


const max = new Date().getFullYear();
const min = max - getMin();

const result = document.querySelector("#resultado");

//Generate object with search
const searchData = {
  brand: "",
  year: "",
  minPrice: "",
  maxPrice: "",
  doors: "",
  transmission: "",
  color: ""
}

//Functions
function fillSelect() {
  for (let i = max; i >= min; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;

    year.appendChild(option);
  }
};

function getMin() {
  const yearList = cars.map((e) => e.year);
  const min = Math.min(...yearList);
  const result = max - min;

  return result;
};


function carFilter() {
  const result = cars.filter( brandFilter ).filter( yearFilter ) //Higer order function (funciones de alto nivel)

  showCars(result);
}

function brandFilter(car) {
  if (searchData.brand) {
    return car.brand === searchData.brand
  }
  return car
}
function yearFilter(car) {
  if (searchData.year) {
    return car.year === parseInt(searchData.year) 
  }
  return car
}



function showCars(cars) {
  cars.forEach((car) => {
    const { brand, model, year, doors, color, price, transmision } = car;
    const carHTML = document.createElement("p");
    carHTML.textContent = `
        ${brand} ${model} - ${year} - ${doors} Doors - Transmission: ${transmision} - Price: ${price} - Color: ${color}
    `;

    result.appendChild(carHTML);
  });
};



