import { clientData, createClient } from "../functions.js";
import { tableInput, hourInput, btnSaveClient } from "../selectors.js";

class App {
  constructor() {
    this.init();
  }

  init() {
    tableInput.addEventListener("input", (e) => clientData(e));
    hourInput.addEventListener("input", (e) => clientData(e));
    btnSaveClient.addEventListener("click", () => {
      createClient();
    });
  }
}

export default App;
