import { addMenuElement, calculateTips } from "../functions.js";

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
    form.classList.add("col-md-6", "tipForm");

    const formContainer = document.createElement("div");
    formContainer.classList.add("card", "py-2", "px-3", "shadow");

    const heading = document.createElement("h3");
    heading.classList.add("my-4", "text-center");
    heading.textContent = "Tips";

    const radio10 = document.createElement("input");
    radio10.type = "radio";
    radio10.name = "tips";
    radio10.value = "10";
    radio10.classList.add("form-check-input");
    radio10.onclick = () => calculateTips(10);

    const radio10Label = document.createElement("label");
    radio10Label.classList.add("form-check-label");
    radio10Label.textContent = "10%";

    const radio10Div = document.createElement("div");
    radio10Div.classList.add("form-check");

    radio10Div.appendChild(radio10);
    radio10Div.appendChild(radio10Label);

    const radio15 = document.createElement("input");
    radio15.type = "radio";
    radio15.name = "tips";
    radio15.value = "15";
    radio15.classList.add("form-check-input");
    radio15.onclick = () => calculateTips(15);

    const radio15Label = document.createElement("label");
    radio15Label.classList.add("form-check-label");
    radio15Label.textContent = "15%";

    const radio15Div = document.createElement("div");
    radio15Div.classList.add("form-check");

    radio15Div.appendChild(radio15);
    radio15Div.appendChild(radio15Label);


    const radio20 = document.createElement("input");
    radio20.type = "radio";
    radio20.name = "tips";
    radio20.value = "20";
    radio20.classList.add("form-check-input");
    radio20.onclick = () => calculateTips(20);

    const radio20Label = document.createElement("label");
    radio20Label.classList.add("form-check-label");
    radio20Label.textContent = "20%";

    const radio20Div = document.createElement("div");
    radio20Div.classList.add("form-check");

    radio20Div.appendChild(radio20);
    radio20Div.appendChild(radio20Label);

    formContainer.appendChild(heading);
    formContainer.appendChild(radio10Div);
    formContainer.appendChild(radio15Div);
    formContainer.appendChild(radio20Div);

    form.appendChild(formContainer);
    content.appendChild(form);

  }

  showTotal(data) {
    const {subtotal, totalTip, totalWithTip} = data;
    const totalCard = document.querySelector(".totalCard")
    if(totalCard) {
      totalCard.remove();
    }

    const tipForm = document.querySelector(".tipForm");

    const subtotalP = document.createElement("p");
    subtotalP.classList.add("fw-bold");
    subtotalP.textContent = `Subtotal: `;

    const subtotalSpan = document.createElement("span");
    subtotalSpan.classList.add("fw-normal");
    subtotalSpan.textContent = `$${subtotal}`;
    subtotalP.appendChild(subtotalSpan);

    const tipP = document.createElement("p");
    tipP.classList.add("fw-bold");
    tipP.textContent = `Tip: `;

    const tipSpan = document.createElement("span");
    tipSpan.classList.add("fw-normal");
    tipSpan.textContent = `$${totalTip}`;
    tipP.appendChild(tipSpan);

    const totalP = document.createElement("p");
    totalP.classList.add("fs-3", "fw-bold");
    totalP.textContent = `Total: `;

    const totalSpan = document.createElement("span");
    totalSpan.classList.add("fs-3", "fw-normal");
    totalSpan.textContent = `$${totalWithTip}`;
    totalP.appendChild(totalSpan);

    const totalDiv = document.createElement("div");
    totalDiv.classList.add("card", "py-2", "px-3", "shadow", "totalCard");

    totalDiv.appendChild(subtotalP);
    totalDiv.appendChild(tipP);
    totalDiv.appendChild(totalP);

    tipForm.appendChild(totalDiv);

    console.log(subtotal, totalTip, totalWithTip);
  }
}

export default UI;
