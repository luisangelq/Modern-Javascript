import { appointmentData, newAppointment, createDB} from "../functions.js"

import {
  petInput,
  ownerInput,
  phoneInput,
  dateInput,
  timeInput,
  symptomsInput,
  form,
} from "../selectors.js";

class App {
  constructor() {
    this.init();
  }

  init() {
    petInput.addEventListener("input", (e) => appointmentData(e));
    ownerInput.addEventListener("input", (e) => appointmentData(e));
    phoneInput.addEventListener("input", (e) => appointmentData(e));
    dateInput.addEventListener("input", (e) => appointmentData(e));
    timeInput.addEventListener("input", (e) => appointmentData(e));
    symptomsInput.addEventListener("input", (e) => appointmentData(e));

    form.addEventListener("submit", (e) => newAppointment(e));

    createDB();
  }
}

export default App;