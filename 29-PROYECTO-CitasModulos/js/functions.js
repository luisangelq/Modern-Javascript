import Appointment from "./classes/Appointment.js";
import UI from "./classes/UI.js";

import {
  petInput,
  ownerInput,
  phoneInput,
  dateInput,
  timeInput,
  symptomsInput,
  form,
} from "./selectors.js";

const manageAppointments = new Appointment();
const ui = new UI();

const appointmentObj = {
  pet: "",
  owner: "",
  phone: "",
  date: "",
  time: "",
  symptoms: "",
};

//Edit Mode
let edit;

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
    form.querySelector("button").textContent = "Create Appointment";
    manageAppointments.editAppointment({ ...appointmentObj });

    edit = false;
    ui.printAlert("Updated Successfully");
  } else {
    appointmentObj.id = Date.now();

    manageAppointments.addAppointment({ ...appointmentObj });

    ui.printAlert("Added Successfully");
  }

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
  const { id, pet, owner, phone, date, time, symptoms } = appointment;
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

  form.querySelector(
    "button"
  ).innerHTML = `Update <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>`;

  edit = true;
};

export { appointmentData, newAppointment, deleteAppointment, editAppointment };
