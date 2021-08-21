import { connectDB, getClientToEdit, validateClient } from "./functions.js";

const form = document.querySelector("form")

document.addEventListener('DOMContentLoaded', () => {
    connectDB();

    const URLparams = new URLSearchParams(window.location.search);
    const idClient = URLparams.get('id');
    if (idClient) {
        setTimeout(() => {
            getClientToEdit(idClient)
        }, 100);
    }

    form.addEventListener("submit", (e) => validateClient(e, idClient));

})