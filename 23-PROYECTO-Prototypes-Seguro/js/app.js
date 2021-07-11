document.addEventListener("DOMContentLoaded", () => {
  ui.fillOptions();
  const form = document.querySelector("#cotizar-seguro");
  form.addEventListener("submit", quoteInsurance);
});

//Constructors
function Insurance(brand, year, type) {
  this.brand = brand;
  this.year = year;
  this.type = type;
}
Insurance.prototype.quoteInsurance = function() {
    const base = 2000
    let result;
    switch (this.brand) {
        case "american": result = base * 1.15;
            break;
        case "asian": result = base * 1.05;
            break;
        case "european": result = base * 1.35;
            break;
        default:
            break;
    }
    //Discount per year
    const diference = new Date().getFullYear() - this.year;

    //Each year old we're gonna discount 2.5%
    result -= ((diference * 2.5) * result) / 100
    
    switch (this.type) {
        case "basic": result *= 1.25
            break;
        case "premium": result *= 1.50
            break;
        default:
            break;
    }
    return result
}

function UI() {}

UI.prototype.fillOptions = () => {
  const max = new Date().getFullYear(),
    min = max - 20;

  const selectYear = document.querySelector("#year");

  for (let i = max; i > min; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    selectYear.appendChild(option);
  }
};
UI.prototype.showMessage = (message, type) => {
  const div = document.createElement("div");
  div.classList.add("mensaje", "mt-10");
  div.textContent = message;
  if (type === "error") {
    div.classList.add("message", "error");
  } else {
    div.classList.add("correcto");
  }

  const form = document.querySelector("#cotizar-seguro");
  form.insertBefore(div, document.querySelector("#resultado"));

  setTimeout(() => {
    div.remove();
  }, 2000);
};
UI.prototype.showResult = (insurance, total) => {

    const { brand, year, type } = insurance

    //create result
    const div = document.createElement("div")
    div.classList.add("mt-10")

    div.innerHTML = `
        <p class="header">Your Result</p>
        <p class="font-bold">Nationality: <span class="font-normal capitalize">${brand}</span></p>
        <p class="font-bold">Year: <span class="font-normal">${year}</span></p>
        <p class="font-bold">Type: <span class="font-normal capitalize">${type}</span></p>
        <p class="font-bold">Total: <span class="font-normal"> $${total}</span></p>
    `

    const resultDiv = document.querySelector("#resultado");

    //Show Spinner
    const spinner = document.querySelector("#cargando")
    spinner.style.display = "block"

    setTimeout(() => {
        spinner.style.display = "none"
        resultDiv.appendChild(div)
    }, 2000);
}

//Instace
const ui = new UI();
console.log(ui);

function quoteInsurance(e) {
  e.preventDefault();
  if (document.querySelector(".error")) {
    document.querySelector(".error").remove();
  }
  if (document.querySelector(".correcto")) {
    document.querySelector(".correcto").remove();
  }

  const brand = document.querySelector("#marca").value;
  const year = document.querySelector("#year").value;
  const type = document.querySelector("input[name='tipo']:checked").value;

  if (brand === "" || year === "" || type === " ") {
    ui.showMessage("All Fields Are Required", "error");
    return
  }
    ui.showMessage("Loading...");

  //Hidde previous results
  const resultsDiv = document.querySelector("#resultado div")
  if (resultsDiv) {
      resultsDiv.remove()
  }
  //Instance of insurance
  const insurance = new Insurance(brand, year, type);
  const total = insurance.quoteInsurance();
  ui.showResult(insurance, total )
}
