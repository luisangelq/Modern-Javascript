import UI from "./classes/UI.js";

const ui = new UI();

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const companyInput = document.querySelector("#company");

const form = document.querySelector("#form");

const clientList = document.querySelector("#clientList");
if (clientList) {
  clientList.addEventListener("click", (e) => deleteClient(e)); 
}


 
let DB;
let edit;

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

const validateClient = (e, id) => {
  e.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const company = companyInput.value;

  if (name === "" || email === "" || phone === "" || company === "") {
    ui.printAlert("Please fill all the fields", "error");
    return;
  }

  if (edit) {
    const updatedClient = {
      id: Number(id),
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      company: companyInput.value,
    };
    updateClient(updatedClient);
  } else {
    //Create an object with the data
    const client = {
      id: Date.now(),
      name,
      email,
      phone,
      company,
    };
    addClient(client);
  }
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
    }, 1500);
  };
  transaction.onerror = (e) => {
    if (e.target.error.message.includes("uniqueness")) {
      ui.printAlert("This Email Already Exists", "error");
    } else {
      ui.printAlert("Error adding client", "error");
    }
  };
};

//Get clients from DB
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
            <a href="#" data-client="${id}" class="text-red-600 hover:text-red-900 deleteClient">Delete</a>
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

//Get client to edit
const getClientToEdit = (id) => {
  edit = true;
  const transaction = DB.transaction(["crm"], "readwrite");
  const store = transaction.objectStore("crm");

  store.openCursor().onsuccess = (e) => {
    const cursor = e.target.result;
    if (cursor) {
      if (cursor.value.id === Number(id)) {
        const { name, email, phone, company } = cursor.value;
        nameInput.value = name;
        emailInput.value = email;
        phoneInput.value = phone;
        companyInput.value = company;
      }
      cursor.continue();
    }
  };
};

const updateClient = (client) => {
  const transaction = DB.transaction(["crm"], "readwrite");
  const store = transaction.objectStore("crm");
  store.put(client);
  
  transaction.oncomplete = () => {
    ui.printAlert("Client Updated");

    edit = false;
    form.reset();

    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  }
  transaction.onerror = (e) => {
    if (e.target.error.message.includes("uniqueness")) {
      ui.printAlert("This Email Already Exists", "error");
    } else {
      ui.printAlert("Error Updating Client", "error");
    }
  }
};

const deleteClient = (id) => {
  if (id.target.classList.contains("deleteClient")) {
    const idDelete = Number(id.target.dataset.client) 

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        const transaction = DB.transaction(["crm"], "readwrite");
        const store = transaction.objectStore("crm");
        store.delete(idDelete);

        transaction.onerror = () => {
          Swal.fire(
            'Error!',
            'Something Went Wrong',
            'error'
          )
        }
        transaction.oncomplete = () => {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          id.target.parentElement.parentElement.remove(); 
        }
      }
    })
    
  }
}

export {
  createDB,
  connectDB,
  validateClient,
  getClients,
  getClientToEdit,
  updateClient,
  clientList,
  deleteClient
};
