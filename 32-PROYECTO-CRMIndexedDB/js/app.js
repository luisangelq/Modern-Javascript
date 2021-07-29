import App from "./classes/App.js"

const app = new App()
// (function(){

//     let DB;

    
//     document.addEventListener("DOMContentLoaded", () => {
//         createDB();
//     });

//     //create DB
//     const createDB = () => {
//         const db = window.indexedDB.open("UmbralCRM", 1);
        
//         db.onsuccess = () => {
//             console.log("DB created");
//             DB = db.result;
//         };
//         db.onerror = () => {
//             console.log("DB creation error"); 
//         };

//         db.onupgradeneeded = (e) => {
//             const db = e.target.result;
            
//             const store = db.createObjectStore("crm", { keyPath: "id", autoIncrement: true });
//             store.createIndex("id", "id", { unique: true });
//             store.createIndex("name", "name", { unique: false });
//             store.createIndex("email", "email", { unique: true });
//             store.createIndex("phone", "phone", { unique: false });
//             store.createIndex("company", "company", { unique: false });

//             console.log("DB Ready and Created");
//         };
//     } 
// })();