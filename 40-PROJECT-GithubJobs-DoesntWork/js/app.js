
const form = document.querySelector("#form");
const result = document.querySelector("#result");

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", validateSearch);
});

const validateSearch = (e) => {
  e.preventDefault();
  const search = document.querySelector("#search").value;
  if (search === "") {
    showAlert("Search field cannot be empty");
    return;
  }

  consultApi(search);
};

const consultApi = (search) => {
    const url = `https://jobs.github.com/positions.json?search=${search}`; 
    
    axios.get(url)
    .then(response => console.log(response));
};

const showAlert = (message) => {
  if (!document.querySelector(".showAlert")) {
    const alert = document.createElement("div");
    alert.className = "bg-gray-100 mt-4 p-3 text-center rounded showAlert ";
    alert.innerHTML = message;

    form.appendChild(alert);

    setTimeout(() => {
      form.removeChild(alert);
    }, 3000);
  }
};
