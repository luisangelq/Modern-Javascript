document.addEventListener("DOMContentLoaded", () => {
  showCars();
  //fill select year
  fillSelect();

  brand.addEventListener("change", (e) => {
    searchData.brand = e.target.value
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
const transmission = document.querySelector("#minimo")
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
function getMin() {
  const yearList = cars.map((e) => e.year);
  const min = Math.min(...yearList);
  const result = max - min;

  return result;
};

function showCars() {
  cars.forEach((car) => {
    const { brand, model, year, doors, color, price, transmision } = car;
    const carHTML = document.createElement("p");
    carHTML.textContent = `
        ${brand} ${model} - ${year} - ${doors} Doors - Transmission: ${transmision} - Price: ${price} - Color: ${color}
    `;

    result.appendChild(carHTML);
  });
};

function fillSelect() {
  for (let i = max; i >= min; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;

    year.appendChild(option);
  }
};


