import {form, validateClient, getClientToEdit } from "./functions.js"

document.addEventListener('DOMContentLoaded', () => {

    const URLparams = new URLSearchParams(window.location.search);
    const idClient = Number(URLparams.get('id')) 

    getClientToEdit(idClient)

    form.addEventListener('submit', (e) => validateClient(e, idClient))
});