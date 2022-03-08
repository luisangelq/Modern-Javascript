import { addMenuElement } from "../functions.js";

class UI {
  showAlert(message, type) {
    const alertExist = document.querySelector(".errorAlert");
    if (alertExist) {
      alertExist.remove();
    }
    const alert = document.createElement("div");
    alert.classList.add(type, "invalid-feedback", "d-block", "text-center");

    alert.innerHTML = message;
    document.querySelector(".modal-body").appendChild(alert);
    setTimeout(function () {
      alert.remove();
    }, 3000);
  }

  showMenu(menu) {
    //order ascendant by category
    menu.dishes.sort((a, b) => {
      if (a.category > b.category) {
        return 1;
      }
      if (a.category < b.category) {
        return -1;
      }
      return 0;
    });

    const content = document.querySelector("#menu .content");

    const categories = {
      1: menu.category[1],
      2: menu.category[2],
      3: menu.category[3],
    };
    console.log(categories);

    menu.dishes.forEach((element) => {
      const row = document.createElement("div");
      row.classList.add("row", "py-3", "border-top");

      const name = document.createElement("div");
      name.classList.add("col-md-4", "text-center");
      name.textContent = element.name;

      const price = document.createElement("div");
      price.classList.add("col-md-3", "fw-bold");
      price.textContent = "$" + element.price;

      const category = document.createElement("div");
      category.classList.add("col-md-3");
      category.textContent = categories[element.category];

      const add = document.createElement("div");
      add.classList.add("col-md-2", "text-center");

      const inputTotal = document.createElement("input");
      inputTotal.type = "number";
      inputTotal.min = "0";
      inputTotal.value = "0";
      inputTotal.id = `product-${element.id}`;
      inputTotal.classList.add("form-control", "text-center");
      inputTotal.onchange = () => {
        const total = parseInt(inputTotal.value);
        addMenuElement({ ...element, total });
      };

      add.appendChild(inputTotal);

      row.appendChild(name);
      row.appendChild(price);
      row.appendChild(category);
      row.appendChild(add);

      content.appendChild(row);
    });
  }

  showResume(clientObj) {
    const content = document.querySelector("#resume .content");
    const resume = document.createElement("div");
    

    if (clientObj.order.length === 0) {
      const heading = document.createElement("p");
      heading.classList.add("text-center");
      heading.textContent = "Add order elements";

      resume.appendChild(heading);
    } else {
      resume.classList.add("col-md-6", "card", "py-2", "px-3", "shadow");

      const heading = document.createElement("h3");
      heading.textContent = "Consumed Dishes";
      heading.classList.add("my-4", "text-center");

      const table = document.createElement("p");
      table.textContent = "Table: ";
      table.classList.add("fw-bold");
      const tableSpan = document.createElement("span");
      tableSpan.textContent = clientObj.table;
      tableSpan.classList.add("fw-normal");

      const hour = document.createElement("p");
      hour.textContent = "Hour: ";
      hour.classList.add("fw-bold");
      const hourSpan = document.createElement("span");
      hourSpan.textContent = clientObj.hour;
      hourSpan.classList.add("fw-normal");

      const itemGroup = document.createElement("ul");
      itemGroup.classList.add("list-group");

      clientObj.order.map((element) => {
        const { name, price, total, id } = element;

        const item = document.createElement("li");
        item.classList.add("list-group-item");

        const itemName = document.createElement("h4");
        itemName.classList.add("my-4");
        itemName.textContent = name;

        const itemTotal = document.createElement("p");
        itemTotal.classList.add("fw-bold");
        itemTotal.textContent = "Quantity: " + total;

        const itemPrice = document.createElement("p");
        itemPrice.classList.add("fw-bold");
        itemPrice.textContent = `Price: $${price}`;

        const subtotal = document.createElement("p");
        subtotal.classList.add("fw-bold");
        subtotal.textContent = `Subtotal: $${price * total}`;

        const remove = document.createElement("button");
        remove.classList.add("btn", "btn-danger");
        remove.textContent = "Remove";
        remove.onclick = () => {
          const input = document.querySelector(`#product-${id}`);
          input.value = 0;
          input.onchange();
        };

        item.appendChild(itemName);
        item.appendChild(itemTotal);
        item.appendChild(itemPrice);
        item.appendChild(subtotal);
        item.appendChild(remove);

        itemGroup.appendChild(item);
      });

      table.appendChild(tableSpan);
      hour.appendChild(hourSpan);

      resume.appendChild(heading);
      resume.appendChild(table);
      resume.appendChild(hour);
      resume.appendChild(itemGroup);
    }

    content.appendChild(resume);
  }

  showTips() {
    const content = document.querySelector("#resume .content");

    const form = document.createElement("div");
    form.classList.add("col-md-6");

    const formContainer = document.createElement("div");
    formContainer.classList.add("card", "py-2", "px-3", "shadow");

    const heading = document.createElement("h3");
    heading.classList.add("my-4", "text-center");
    heading.textContent = "Tips";

    formContainer.appendChild(heading);
    form.appendChild(formContainer);
    

    content.appendChild(form);
  }
}

export default UI;
