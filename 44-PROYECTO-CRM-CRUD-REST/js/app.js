import {clientList, showClients, confirmDeleteClient} from "./functions.js"


document.addEventListener("DOMContentLoaded", () => {
    showClients();

    clientList.addEventListener("click", confirmDeleteClient)
})