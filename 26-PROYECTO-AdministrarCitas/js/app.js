const petInput = document.querySelector("#mascota");
const ownerInput = document.querySelector("#propietario");
const phoneInput = document.querySelector("#telefono");
const dateInput = document.querySelector("#fecha");
const timeInput = document.querySelector("#hora");
const symptomsInput = document.querySelector("#sintomas");

const form = document.querySelector("#nueva-cita");
const dateList = document.querySelector("#citas");

//Edit Mode
let edit;

const appointmentObj = {
  pet: "",
  owner: "",
  phone: "",
  date: "",
  time: "",
  symptoms: "",
};

document.addEventListener("DOMContentLoaded", () => {
  petInput.addEventListener("input", (e) => appointmentData(e));
  ownerInput.addEventListener("input", (e) => appointmentData(e));
  phoneInput.addEventListener("input", (e) => appointmentData(e));
  dateInput.addEventListener("input", (e) => appointmentData(e));
  timeInput.addEventListener("input", (e) => appointmentData(e));
  symptomsInput.addEventListener("input", (e) => appointmentData(e));

  form.addEventListener("submit", (e) => newAppointment(e));
});

class Appointment {
  constructor() {
    this.appointments = [];
  }

  addAppointment(appointment) {
    this.appointments = [...this.appointments, appointment];

    console.log(this.appointments);
  }

  deleteAppointment(id) {
    this.appointments = this.appointments.filter(
      (appointment) => appointment.id !== id
    );
  }
}

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

  printAppointments({ appointments }) {
    while (dateList.firstChild) {
      dateList.removeChild(dateList.firstChild);
    }
    appointments.forEach((appointment) => {
      const { id, pet, owner, phone, date, time, symptoms } = appointment;

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
      deleteBtn.classList.add("btn", "btn-danger" );
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
    });
  }
}

const manageAppointments = new Appointment();
const ui = new UI();

const appointmentData = (e) => {
  appointmentObj[e.target.name] = e.target.value;
};

const newAppointment = (e) => {
  e.preventDefault();

  const { pet, owner, phone, date, time, symptoms } = appointmentObj;

  if (
    pet === "" ||
    owner === "" ||
    phone === "" ||
    date === "" ||
    time === "" ||
    symptoms === ""
  ) {
    ui.printAlert("All Fields Are Required", "error");
    return;
  }

  if (edit) {
    console.log("edit mode");
  }else{
    console.log("new mode");
  }
  appointmentObj.id = Date.now();

  manageAppointments.addAppointment({ ...appointmentObj });

  resetObj();
  form.reset();

  ui.printAppointments(manageAppointments);
};

const resetObj = () => {
  appointmentObj.pet = "";
  appointmentObj.owner = "";
  appointmentObj.phone = "";
  appointmentObj.date = "";
  appointmentObj.time = "";
  appointmentObj.symptoms = "";
};

const deleteAppointment = (id) => {
  manageAppointments.deleteAppointment(id);

  //Show Delete alert
  ui.printAlert("Deleted Successfully");

  //Refresh appointments
  ui.printAppointments(manageAppointments);
};

const editAppointment = (appointment) => {
    const {id, pet, owner, phone, date, time, symptoms } = appointment;
    //fill form
    petInput.value = pet;
    ownerInput.value = owner;
    phoneInput.value = phone;
    dateInput.value = date;
    timeInput.value = time;
    symptomsInput.value = symptoms;

    //fill appointmentObj
    appointmentObj.pet = pet;
    appointmentObj.owner = owner;
    appointmentObj.phone = phone;
    appointmentObj.date = date;
    appointmentObj.time = time;
    appointmentObj.symptoms = symptoms;
    appointmentObj.id = id;

  
    form.querySelector("button").innerHTML = `UPDATE <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>`;

    edit = true;
}
