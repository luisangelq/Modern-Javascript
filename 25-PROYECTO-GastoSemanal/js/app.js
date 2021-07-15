//Launch SweetAlert
document.addEventListener("DOMContentLoaded", () => {
  Swal.fire({
    title: "Input Your Budget",
    input: "text",
    inputPlaceholder: "Enter your budget",
  });

  const budgetContainer = document.querySelector(".swal2-container");
  const budgetInput = document.querySelector(".swal2-input");

  budgetContainer.addEventListener("click", (e) => {
    const budgetValue = Number(budgetInput.value);

    if (e.target.classList.contains("swal2-popup")) {
      return;
    }
    if (
      e.target.classList.contains("swal2-container") ||
      e.target.classList.contains("swal2-confirm")
    ) {
      if (budgetValue === "" || budgetValue <= 0 || isNaN(budgetValue)) {
        window.location.reload();
      } else {
        budget = new Budget(budgetValue);
        ui.insertBudget(budget);
      }
    }
  });
});

//Variables and selectors
const form = document.querySelector("#agregar-gasto");
const listExpense = document.querySelector("#gastos ul ");

//Events
form.addEventListener("submit", (e) => addExpense(e));

//Classes
class Budget {
  constructor(budget) {
    this.budget = budget;
    this.remain = budget;
    this.expenses = [];
  }
}
class UI {
  insertBudget(amount) {
    const { budget, remain } = amount;
    document.querySelector("#total").textContent = budget;
    document.querySelector("#restante").textContent = remain;
  }
  printAlert(message, type) {
    const divMessage = document.createElement("div");
    divMessage.classList.add("text-center", "alert");

    if (type === "error") {
        divMessage.classList.add("alert-danger")
    }
  }
}

//Instance
const ui = new UI();

//Functions
const addExpense = (e) => {
  e.preventDefault();
   
  const item = document.querySelector("#gasto").value;
  const amount = document.querySelector("#cantidad").value;

  if (item === "" || amount === "") {
      ui.printAlert("Both Fields Are Required", "error")
  }
};
