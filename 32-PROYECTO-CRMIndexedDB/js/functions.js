import UI from "./classes/UI.js"

const ui = new UI();

let DB;
const createDB = () => {
    
    const db = window.indexedDB.open("UmbralCRM", 1);
    
    db.onsuccess = () => {
        console.log("DB created");
        DB = db.result;
    };
    db.onerror = () => {
        console.log("DB creation error"); 
    };

    db.onupgradeneeded = (e) => {
        const db = e.target.result;
        
        const store = db.createObjectStore("crm", { keyPath: "id", autoIncrement: true });
        store.createIndex("id", "id", { unique: true });
        store.createIndex("name", "name", { unique: false });
        store.createIndex("email", "email", { unique: true });
        store.createIndex("phone", "phone", { unique: false });
        store.createIndex("company", "company", { unique: false });

        console.log("DB Ready and Created");
    };
} 

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
      ui.printAlert("Please fill all the fields", "error");
      return;
    }
  };

export {createDB, connectDB, validateClient }; 