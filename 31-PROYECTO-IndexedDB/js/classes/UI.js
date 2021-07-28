import { editAppointment, deleteAppointment, DB } from "../functions.js";
import { dateList } from "../selectors.js";

class UI {
  printAlert(message, type) {
    const deleteError = document.querySelector(".alert-danger");
    if (deleteError) {
      deleteError.remove();
    }

    const divMessage = document.createElement("div");
    divMessage.classList.add("text-center", "alert", "d-block", "col-12");

    if (type === "error") {
      divMessage.classList.remove("alert-success");
      divMessage.classList.add("alert-danger");
    } else {
      divMessage.classList.remove("alert-danger");
      divMessage.classList.add("alert-success");
    }

    divMessage.textContent = message;

    document.querySelector("#contenido").appendChild(divMessage);

    setTimeout(() => {
      divMessage.remove();
    }, 2000);
  }

  printAppointments() {
    while (dateList.firstChild) {
      dateList.removeChild(dateList.firstChild);
    }

    //Read the data from the DB
    const store = DB.transaction("appointments").objectStore("appointments");
    store.openCursor().onsuccess = function (e) {
      const cursor = e.target.result;

      if (cursor) {
        const { id, pet, owner, phone, date, time, symptoms } = cursor.value;

        const divAppointment = document.createElement("div");
        divAppointment.classList.add("cita", "p-3");
        divAppointment.dataset.id = id;

        //Scripting
        const petElement = document.createElement("h2");
        petElement.classList.add("card-title", "font-weight-bolder");
        petElement.textContent = pet;

        const ownerElement = document.createElement("p");
        ownerElement.innerHTML = `
            <span class="font-weight-bolder">Owner: </span> ${owner}
          `;

        const phoneElement = document.createElement("p");
        phoneElement.innerHTML = `
            <span class="font-weight-bolder">Phone: </span> ${phone}
          `;

        const dateElement = document.createElement("p");
        dateElement.innerHTML = `
            <span class="font-weight-bolder">Date: </span> ${date}
          `;

        const timeElement = document.createElement("p");
        timeElement.innerHTML = `
            <span class="font-weight-bolder">Time: </span> ${time}
          `;

        const symptomElement = document.createElement("p");
        symptomElement.innerHTML = `
            <span class="font-weight-bolder">Symptoms: </span> ${symptoms}
          `;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn", "btn-danger");
        deleteBtn.innerHTML = `DELETE <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
      </svg>`;

        deleteBtn.onclick = () => deleteAppointment(id);

        const editBtn = document.createElement("button");
        editBtn.classList.add("btn", "btn-info", "mr-2");
        editBtn.innerHTML = `EDIT <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>`;
        editBtn.onclick = () => editAppointment(appointment);

        divAppointment.appendChild(petElement);
        divAppointment.appendChild(ownerElement);
        divAppointment.appendChild(phoneElement);
        divAppointment.appendChild(dateElement);
        divAppointment.appendChild(timeElement);
        divAppointment.appendChild(symptomElement);
        divAppointment.appendChild(editBtn);
        divAppointment.appendChild(deleteBtn);

        //Add to HTML
        dateList.appendChild(divAppointment);

        //Move to the next element in the DB 
        cursor.continue();
      }
    };
  }
}

export default UI;
