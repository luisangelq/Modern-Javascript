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
        budget = new Budget(budgetValue)
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

  newExpense(expense) {
    this.expenses = [...this.expenses, expense]
  }
}

class UI {
  insertBudget(amount) {
    const { budget, remain } = amount;
    document.querySelector("#total").textContent = budget;
    document.querySelector("#restante").textContent = remain;
  }

  printAlert(message, type) {
    const removeError = document.querySelector(".removeError");
    if (removeError) {
      removeError.remove();
    }
    const divMessage = document.createElement("div");
    divMessage.classList.add("text-center", "alert", "removeError");

    if (type === "error") {
      divMessage.classList.add("alert-danger");
    } else {
      divMessage.classList.add("alert-success");
    }
    divMessage.textContent = message;

    document.querySelector(".primario").insertBefore(divMessage, form);

    setTimeout(() => {
      divMessage.remove();
    }, 2000);
  }

  addExpenseList(expenses) {
    console.log(expenses);
  }
}

//Instance
const ui = new UI();
let budget;


//Functions
const addExpense = (e) => {
  e.preventDefault();

  const item = document.querySelector("#gasto").value;
  const amount = document.querySelector("#cantidad").value;

  if (item === "" || amount === "") {
    ui.printAlert("Both Fields Are Required", "error");
  } else if ( amount <= 0 || isNaN(amount)){
    ui.printAlert("Amount No Valid", "error");
  }

  const expense = {item, amount, id: Date.now()}

  //Add new expense
  budget.newExpense(expense)
  
  ui.printAlert("Expense Added Successfully");

  //Print Expenses
  const { expenses } = budget;

  ui.addExpenseList(expenses);

  form.reset()
};
