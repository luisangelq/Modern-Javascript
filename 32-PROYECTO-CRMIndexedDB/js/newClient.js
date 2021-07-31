import { connectDB, validateClient } from "./functions.js";



document.addEventListener("DOMContentLoaded", function () {
  //Connect to IndexedDB
  connectDB();

  const form = document.querySelector("#form");
  //Add event listener to form
  form.addEventListener("submit", (e) => validateClient(e));
});
