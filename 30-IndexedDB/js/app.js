let DB;

document.addEventListener("DOMContentLoaded", () => {
  crmDB();

  setTimeout(() => {
      createClient();
  }, 3000);
});

const crmDB = () => {
  //create database version 1.0
  let crmDB = window.indexedDB.open("crm", 1);

  //if there are an error
  crmDB.onerror = () => {
    console.log("There was an error creating the Data Base");
  };
  //if there are no errors
  crmDB.onsuccess = () => {
    console.log("The Data Base was created");

    DB = crmDB.result;
  };

  //Data base configuration
  crmDB.onupgradeneeded = (e) => {
    const db = e.target.result;
    const objectStore = db.createObjectStore("client", {
      keyPath: "client",
      autoIncrement: true,
    });

    //Define columns
    objectStore.createIndex("name", "name", { unique: false });
    objectStore.createIndex("email", "email", { unique: true });
    objectStore.createIndex("phone", "phone", { unique: false });

    console.log("Columns created successfully");
  };
};

const createClient = () => {
    let transaction = DB.transaction(["client"], "readwrite");

    transaction.oncomplete = () => {
        console.log("Transaction completed");
    };
    transaction.onerror = () => {
        console.log("Transaction error");
    }

    const objectStore = transaction.objectStore("client");

    const newClient = {
        name: "Luis Angel",
        email: "luisangel@gmail.com",
        phone: 3326265654,
    }

    const request = objectStore.add(newClient);

    console.log(request);
}