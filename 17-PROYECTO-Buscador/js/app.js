
document.addEventListener("DOMContentLoaded", () => {
  showCars();

  //fill select year
  fillSelect()
});

//Variables
const result = document.querySelector("#resultado");
const year = document.querySelector("#year")

const max = new Date().getFullYear();


const min = getMin.sort()

console.log(min);
//Functions
const getMin = () => {
    const yearList = cars.map(e => e.year)
}

const showCars = () => {
  cars.forEach((car) => {

    const {brand, model, year, doors, color, price, transmision} = car
    const carHTML = document.createElement("p");
    carHTML.textContent = `
        ${brand} ${model} - ${year} - ${doors} Doors - Transmission: ${transmision} - Price: ${price} - Color: ${color}
    `;

    result.appendChild(carHTML)
  });
};

const fillSelect = () => {
    for (let i = max; i >= min ; i--) {
        const option = document.createElement("option")
        option.value = i;
        option.textContent = i;

        year.appendChild(option )
        
    }
}
