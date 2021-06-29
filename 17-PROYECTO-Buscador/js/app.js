document.addEventListener("DOMContentLoaded", () => {
  showCars();
  
  //fill select year
  fillSelect();
});

//Variables
const result = document.querySelector("#resultado");
const year = document.querySelector("#year");

const max = new Date().getFullYear();
const min = max - getMin();

console.log(min);



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
