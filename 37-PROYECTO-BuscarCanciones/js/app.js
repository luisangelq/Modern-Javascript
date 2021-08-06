import * as UI from "./UI.js";
import API from "./API.js";

UI.form.addEventListener("submit", searchSong);

function searchSong(e) {
  e.preventDefault();

  const artist = document.querySelector("#artist").value;
  const song = document.querySelector("#song").value;
  console.log(artist, song);

  if (artist === "" || song === "") {
    UI.divMessages.textContent = "Please, fill the fields.";
    UI.divMessages.classList.add("error");

    setTimeout(() => {
      UI.divMessages.textContent = "";
      UI.divMessages.classList.remove("error");
    }, 3000);
  } else {
    const search = new API(artist, song);
    search.consultAPI();
  }
}
