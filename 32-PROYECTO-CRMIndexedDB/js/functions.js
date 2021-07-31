import UI from "./classes/UI.js";

const ui = new UI();
const form = document.querySelector("#form");

let DB;
const createDB = () => {
  const db = window.indexedDB.open("UmbralCRM", 1);
  db.onupgradeneeded = (e) => {
    const db = e.target.result;

    const store = db.createObjectStore("crm", {
      keyPath: "id",
      autoIncrement: true,
    });
    store.createIndex("id", "id", { unique: true });
    store.createIndex("name", "name", { unique: false });
    store.createIndex("email", "email", { unique: true });
    store.createIndex("phone", "phone", { unique: false });
    store.createIndex("company", "company", { unique: false });

    console.log("DB Ready and Created");
  };

  db.onsuccess = () => {
    console.log("DB created");
    DB = db.result;
  };
  db.onerror = () => {
    console.log("DB creation error");
  };
};

const connectDB = () => {
  const openConnection = window.indexedDB.open("UmbralCRM", 1);
  openConnection.onerror = () => {
    console.log("Error connecting to UmbralCRM");
  };
  openConnection.onsuccess = () => {
    DB = openConnection.result;
    console.log("Connected to umbralCRM");
  };
};

const validateClient = (e) => {
  e.preventDefault();

  const name = form.querySelector("#name").value;
  const email = form.querySelector("#email").value;
  const phone = form.querySelector("#phone").value;
  const company = form.querySelector("#company").value;

  if (name === "" || email === "" || phone === "" || company === "") {
    console.log("valid");
    ui.printAlert("Please fill all the fields", "error");
    return;
  }

  //Create an object with the data
  const client = {
    id: Date.now(),
    name,
    email,
    phone,
    company,
  };
  addClient(client);
};

const addClient = (client) => {
  const transaction = DB.transaction(["crm"], "readwrite");
  const store = transaction.objectStore("crm");
  store.add(client);
  transaction.oncomplete = () => {
    ui.printAlert("Client added");

    form.reset();

    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  };
  transaction.onerror = (e) => {
    if (e.target.error.message.includes("uniqueness")) {
      ui.printAlert("This Email Already Exists", "error");
    } else {
      ui.printAlert("Error adding client", "error");
    }
  };
};

const getClients = () => {
  const openConnection = window.indexedDB.open("UmbralCRM", 1);
  openConnection.onerror = () => {
    console.log("Error connecting to UmbralCRM");
  };
  openConnection.onsuccess = () => {
    DB = openConnection.result;
    const store = DB.transaction("crm").objectStore("crm");
    store.openCursor().onsuccess = (e) => {
      const cursor = e.target.result;
      if (cursor) {
        const { id, name, email, phone, company } = cursor.value;
        const clientList = document.querySelector("#clientList");
        clientList.innerHTML += ` <tr>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
            <p class="text-sm leading-10 text-gray-700"> ${email} </p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
            <p class="text-gray-700">${phone}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
            <p class="text-gray-600">${company}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
            <a href="edit-client.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Edit</a>
            <a href="#" data-client="${id}" class="text-red-600 hover:text-red-900">Delete</a>
        </td>
    </tr>
`;

        cursor.continue();
      } else {
        console.log("No clients found");
      }
    };
  };
};

export { createDB, connectDB, validateClient, getClients };
