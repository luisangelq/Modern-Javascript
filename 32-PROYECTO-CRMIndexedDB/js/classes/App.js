import { createDB, getClients } from "../functions.js";

class App {
  constructor() {
    this.init();
  }

  init() {
    createDB();

    if (window.indexedDB.open("UmbralCRM", 1)) {
      getClients();
    }
  }
}

export default App;
