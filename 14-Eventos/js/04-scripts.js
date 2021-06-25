console.log("************Submit Event************");

const form = document.querySelector("#formulario");

form.addEventListener("submit", validateform)

function validateform(e) {
    e.preventDefault();
    console.log("Consulting API.. " + e.target.action);
}