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

  form.addEventListener("submit", (e) => addExpense(e));
});

//Variables and selectors
const form = document.querySelector("#agregar-gasto");
const listExpense = document.querySelector("#gastos ul ");

//Classes
class Budget {
  constructor(total) {
    this.total = total;
    this.remain = total;
    this.expenses = [];
  }

  newExpense(expense) {
    this.expenses = [...this.expenses, expense];
    this.calculateRemain();
  }

  calculateRemain() {
    const spent = this.expenses.reduce(
      (total, spend) => total + spend.amount,
      0
    );
    this.remain = this.total - spent;
    ui.insertBudget(budget);

    //change color depending on the remaining
    const { total, remain } = budget;

    const colorDiv = document.querySelector(".restante");

    if (total / 4 > remain) {
      colorDiv.classList.remove("alert-success", "alert-warning");
      colorDiv.classList.add("alert-danger");
    } else if (total / 2 > remain) {
      colorDiv.classList.remove("alert-success", "alert-danger");
      colorDiv.classList.add("alert-warning");
    } else {
      colorDiv.classList.remove("alert-danger", "alert-warning");
      colorDiv.classList.add("alert-success");
    }

    if(remain <= 0) {
      ui.printAlert("The Budget Has Run Out", "error");
      form.querySelector("button").disabled = true
    }
  }

  deleteExpense(id) {
    this.expenses = this.expenses.filter( expense => expense.id !== id)
    ui.addExpenseList(budget.expenses)
    this.calculateRemain()
  }
}

class UI {
  insertBudget(amount) {
    const { total, remain } = amount;
    document.querySelector("#total").textContent = total;
    document.querySelector("#restante").textContent = remain;
  }

  printAlert(message, type) {
    const divMessage = document.createElement("div");
    divMessage.classList.add("text-center", "alert");

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
    while (listExpense.firstChild) {
      listExpense.removeChild(listExpense.firstChild);
    }

    expenses.forEach((expense) => {
      const { id, item, amount } = expense;

      const newExpense = document.createElement("li");
      newExpense.classList.add(
        "list-group-item",
        "d-flex",
        "justify-content-between",
        "align-items-center"
      );
      newExpense.dataset.id = id;
      // newExpense.setAttribute("data-id", id)
      newExpense.innerHTML = ` ${item} <span class="badge badge-primary badge-pill"> $ ${amount} </span> `;

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("btn", "btn-danger", "borrar-gasto");
      deleteBtn.textContent = "X";
      
      deleteBtn.onclick = () => {
        budget.deleteExpense(id)
      }
      newExpense.appendChild(deleteBtn);

      //Add HTML
      listExpense.appendChild(newExpense);
    });
  }
}

//Instance
const ui = new UI();
let budget;

//Functions
const addExpense = (e) => {
  e.preventDefault();

  const item = document.querySelector("#gasto").value;
  const amount = Number(document.querySelector("#cantidad").value);

  if (item === "" || amount === "") {
    ui.printAlert("Both Fields Are Required", "error");
    return;
  } else if (amount <= 0 || isNaN(amount)) {
    ui.printAlert("Amount No Valid", "error");
    return;
  }

  const expense = { item, amount, id: Date.now() };

  //Add new expense
  budget.newExpense(expense);

  ui.printAlert("Expense Added Successfully");

  //Print Expenses
  ui.addExpenseList(budget.expenses);

  form.reset();
};
