const petInput = document.querySelector("#mascota");
const ownerInput = document.querySelector("#propietario");
const phoneInput = document.querySelector("#telefono");
const dateInput = document.querySelector("#fecha");
const hourInput = document.querySelector("#hora");
const symptomsInput = document.querySelector("#sintomas");

const form = document.querySelector("#nueva-cita");
const dateList = document.querySelector("#citas");

const appointmentObj = {
  pet: "",
  owner: "",
  phone: "",
  date: "",
  hour: "",
  symptoms: "",
};

document.addEventListener("DOMContentLoaded", () => {
  petInput.addEventListener("input", (e) => appointmentData(e));
  ownerInput.addEventListener("input", (e) => appointmentData(e));
  phoneInput.addEventListener("input", (e) => appointmentData(e));
  dateInput.addEventListener("input", (e) => appointmentData(e));
  hourInput.addEventListener("input", (e) => appointmentData(e));
  symptomsInput.addEventListener("input", (e) => appointmentData(e));

  form.addEventListener("submit", (e) => newAppointment(e));
});

class Appointment {
  constructor() {
    this.appointments = [];
  }

  addAppointment(appointment) {
    this.appointments = [...this.appointments, appointment]

    console.log(this.appointments);
  }
}

class UI {
    printAlert(message, type) {
        const deleteError = document.querySelector(".alert-danger")
        if (deleteError) {
            deleteError.remove()
        }

        const divMessage = document.createElement("div")
        divMessage.classList.add("text-center", "alert", "d-block", "col-12")

        if(type === "error") {
            divMessage.classList.remove("alert-success")
            divMessage.classList.add("alert-danger")
        } else {
            divMessage.classList.remove("alert-danger")
            divMessage.classList.add("alert-success")
        }

        divMessage.textContent = message

        document.querySelector("#contenido").appendChild(divMessage)

        setTimeout(() => {
            divMessage.remove()
        }, 2000);
    }
}

const manageAppointments = new Appointment();
const ui = new UI();

const appointmentData = (e) => {
  appointmentObj[e.target.name] = e.target.value;
  console.log(appointmentObj);
};

const newAppointment = (e) => {
  e.preventDefault();

  const { pet, owner, phone, date, hour, symptoms } = appointmentObj;

  if (
    pet === "" ||
    owner === "" ||
    phone === "" ||
    date === "" ||
    hour === "" ||
    symptoms === ""
  ) {
      ui.printAlert("All Fields Are Required", "error");
      return;
  }

  appointmentObj.id = Date.now();

  manageAppointments.addAppointment({...appointmentObj})

  resetObj();
  form.reset();
};

const resetObj = () => {
    appointmentObj.pet = "";
    appointmentObj.owner = "";
    appointmentObj.phone = "";
    appointmentObj.date = "";
    appointmentObj.hour = "";
    appointmentObj.symptoms = "";
}
