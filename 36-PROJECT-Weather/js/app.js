const container = document.querySelector(".container");
const result = document.querySelector("#result");
const form = document.querySelector("#form");

window.addEventListener("load", () => {
  form.addEventListener("submit", searchWeather);
});

function searchWeather(e) {
  e.preventDefault();

  //validate form
  const city = document.querySelector("#city").value;
  const country = document.querySelector("#country").value;
  if (city === "" || country === "") {
    showError("Please Fill All The Fields");
    return;
  }

  //Consult API
  consultAPI(city, country);
}

function consultAPI(city, country) {
  showSpinner();
  const appId = "90d2a437ff0878aee153d8cca9b29e32";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        showError("City Not Found");
        result.innerHTML = "";
        return;
      }
      //show result
      showWeather(data);
    });
}

function showWeather(data) {
  result.innerHTML = "";
  const {
    name,
    main: { temp, temp_max, temp_min },
  } = data;

  //Transform kelvin to celsius
  const tempC = (temp - 273.15).toFixed(0);
  const tempMaxC = (temp_max - 273.15).toFixed(0);
  const tempMinC = (temp_min - 273.15).toFixed(0);

  //Show result
  result.innerHTML = `
        <div class="text-center text-white">
            <p class="font-bold text-2xl">${name}</p>
            <p class="font-bold text-6xl">${tempC}&#8451;</p>
            <p class="text-xl">Max: ${tempMaxC}&#8451;</p>
            <p class="text-xl">Min: ${tempMinC}&#8451;</p>
        </div>
    `;
}

function showSpinner() {
  result.innerHTML = `
    <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
    </div>
`;
}

function showError(error) {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: error,
  });
}
