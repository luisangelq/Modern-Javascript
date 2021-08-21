document.addEventListener("DOMContentLoaded", () => {
    startApp()

    email.addEventListener("input", (e) => validateForm(e))
    issue.addEventListener("input", (e) => validateForm(e))
    message.addEventListener("input", (e) => validateForm(e))
    btnReset.addEventListener("click", () => {
        form.reset()
        const borders = document.querySelectorAll(".border-green-500")
            borders.forEach((border) => {
                border.classList.remove("border-green-500")
            })
    })
    form.addEventListener("submit", (e) => sendEmail(e))
    

} )

//Variables
const btnSend = document.querySelector("#enviar")
const btnReset = document.querySelector("#resetBtn")
const form = document.querySelector("#enviar-mail")

const email = document.querySelector("#email")
const issue = document.querySelector("#asunto")
const message = document.querySelector("#mensaje")

const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//Functions
const startApp = () =>  {
    btnSend.disable = true
    btnSend.classList.add("cursor-not-allowed", "opacity-50")
}

const validateForm = (e) => {
    if (e.target.value.length > 0) {

        //Delete errors
        const error = document.querySelector("p.error");
        if (error) {
            error.remove();
        }
        
        e.target.classList.remove("border-red-500")
        e.target.classList.add("border", "border-green-500")
    }else {
        e.target.classList.remove("border-green-500")
        e.target.classList.add("border", "border-red-500");
        showError("All Fields Are Required");
    }

    if(e.target.type === "email") {

        if (! regularExpression.test(e.target.value)) {
            e.target.classList.remove("border", "border-green-500")
            e.target.classList.add("border", "border-red-500")
            showError("Invalid Email");
        }
    }

    if(regularExpression.test(email.value) && issue.value != "" && message.value != ""){
        btnSend.disable = false
        btnSend.classList.remove("cursor-not-allowed", "opacity-50")
    }else {
        btnSend.disable = true
        btnSend.classList.add("cursor-not-allowed", "opacity-50")
    }
}

const showError = (message) => {
    const errorMessage = document.createElement("p")
    errorMessage.textContent = message
    errorMessage.classList.add("border", "border-red-500", "background-red-100", "text-red-500", "p-3", "mt-5", "text-center", "error")
    
    const errors = document.querySelectorAll(".error")

    if (errors.length === 0) {
        form.appendChild(errorMessage)
    }
}


//Send Email
const sendEmail = (e) => {
    e.preventDefault();

    const spinner = document.querySelector("#spinner");
    spinner.style.display = "flex"
    
    setTimeout(() => {
        spinner.style.display = "none"

        const messageSuccess = document.createElement("p")
        messageSuccess.textContent = "Send Successfully" 
        messageSuccess.classList.add("text-center", "my-10", "p-2", "bg-green-500", "text-white", "font-bold")

        form.insertBefore(messageSuccess, spinner)

        setTimeout(() => {
            messageSuccess.remove();
            //Reset Form
            form.reset();

            const borders = document.querySelectorAll(".border-green-500")
            borders.forEach((border) => {
                border.classList.remove("border-green-500")
            })
            //Start Again
            startApp()

            
        }, 3000);
    }, 1500);
}

//Reset Form