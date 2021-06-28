document.addEventListener("DOMContentLoaded", () => {
    startApp()

    email.addEventListener("blur", (e) => validateForm(e))
    issue.addEventListener("blur", (e) => validateForm(e))
    message.addEventListener("blur", (e) => validateForm(e))

} )

//Variables
const btnSend = document.querySelector("#enviar")
const form = document.querySelector("#enviar-mail")

const email = document.querySelector("#email")
const issue = document.querySelector("#asunto")
const message = document.querySelector("#mensaje")


//Functions
const startApp = () =>  {
    btnSend.disable = true
    btnSend.classList.add("cursor-not-allowed", "opacity-50")
    console.log("Hola");
}

const validateForm = (e) => {
    if (e.target.value.length > 0) {
        console.log("There is something");
    }else {
        e.target.classList.add("border", "border-red-500");

        showError();
    }
    console.log(e.target.value);
}

const showError = () => {
    const errorMessage = document.createElement("p")
    errorMessage.textContent = "All Fields Are Required"
    errorMessage.classList.add("border", "border-red-500", "background-red-100", "text-red-500", "p-3", "mt-5", "text-center", "error")
    
    const errors = document.querySelectorAll(".error")

    if (errors.length === 0) {
        form.appendChild(errorMessage)
    }
}