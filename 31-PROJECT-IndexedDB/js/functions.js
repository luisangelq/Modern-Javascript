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
let DB;

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

    //Edit data in DB
    const transaction = DB.transaction(["appointments"], "readwrite");
    const store = transaction.objectStore("appointments");
    store.put(appointmentObj);

    transaction.oncomplete = () => {
      edit = false;
      ui.printAlert("Updated Successfully");
    };
    transaction.onerror = () => {
      ui.printAlert("Error Updating Data", "error");
    };
  } else {
    appointmentObj.id = Date.now();

    //Insert to DB
    const transaction = DB.transaction(["appointments"], "readwrite");
    const store = transaction.objectStore("appointments");
    store.add(appointmentObj);

    transaction.oncomplete = () => {
      console.log("Appointment Created");

      ui.printAlert("Added Successfully");
    };
  }

  resetObj();
  form.reset();

  ui.printAppointments();
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
  const transaction = DB.transaction(["appointments"], "readwrite");
  const store = transaction.objectStore("appointments");
  store.delete(id);

  transaction.oncomplete = () => {
    //Show Delete alert
    ui.printAlert("Deleted Successfully");

    //Refresh appointments
    ui.printAppointments();
  };
  transaction.onerror = () => {
    ui.printAlert("Error Deleting Data", "error");
  }
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

const createDB = () => {
  let appointmentsDB = window.indexedDB.open("appointments", 1);

  appointmentsDB.onerror = () => {
    console.log("Database error");
  };
  appointmentsDB.onsuccess = () => {
    console.log("Database created");
    DB = appointmentsDB.result;

    ui.printAppointments();
  };
  //Schema
  appointmentsDB.onupgradeneeded = (e) => {
    const db = e.target.result;
    const store = db.createObjectStore("appointments", {
      keyPath: "id",
      autoIncrement: true,
    });

    //Define columns
    store.createIndex("pet", "pet", { unique: false });
    store.createIndex("owner", "owner", { unique: false });
    store.createIndex("phone", "phone", { unique: false });
    store.createIndex("date", "date", { unique: false });
    store.createIndex("time", "time", { unique: false });
    store.createIndex("symptoms", "symptoms", { unique: false });
  };
};

export {
  appointmentData,
  newAppointment,
  deleteAppointment,
  editAppointment,
  createDB,
  DB,
};
