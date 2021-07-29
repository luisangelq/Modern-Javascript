(function () {
  let DB;
  const form = document.querySelector("#form");

  document.addEventListener("DOMContentLoaded", function () {
    //Connect to IndexedDB
    connectDB();

    //Add event listener to form
    form.addEventListener("submit", validateClient);
  });

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
      printAlert("Please fill all the fields", "error");

      return;
    }
  };

  const printAlert = (message, type) => {
    const deleteAlert = document.querySelector(".alertM");
    if (!deleteAlert) {
      const alert = document.createElement("div");
      alert.classList.add(
        "py-3",
        "rounded",
        "max-w-lg",
        "mx-auto",
        "mt-6",
        "text-center",
        "border",
        "alertM"
      );

      if (type === "error") {
        alert.classList.add("bg-red-200", "border-red-400", "text-red-700");
      } else {
        alert.classList.add(
          "bg-green-200",
          "border-green-400",
          "text-green-700"
        );
      }
      alert.textContent = message;

      form.appendChild(alert);

      setTimeout(() => {
        alert.remove();
      }, 3000);
    }
  };
})();
