import { form, validateClient } from "./functions.js";

document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", validateClient);
});
