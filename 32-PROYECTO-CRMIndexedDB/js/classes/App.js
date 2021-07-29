import {createDB, validateClient, connectDB} from "../functions.js"


class App {
    constructor() {
        this.init();
    }

    init() {
        createDB();

        connectDB();

        //Add event listener to form
        form.addEventListener("submit", validateClient);
    }
}

export default App;