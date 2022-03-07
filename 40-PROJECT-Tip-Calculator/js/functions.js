import { tableInput, hourInput, hideSections } from "./selectors.js";
import { getDishes } from "./API.js";
import UI from "./Classes/UI.js";

const ui = new UI();

let clientObj = {
  table: "",
  hour: "",
  order: [],
};

const clientData = (e) => {
  clientObj[e.target.name] = e.target.value;
};

const hideModal = () => {
  const modalForm = document.querySelector("#form");
  const modalBootstrap = bootstrap.Modal.getInstance(modalForm);
  modalBootstrap.hide();
};

const showSections = () => {
  hideSections.forEach((section) => {
    section.classList.remove("d-none");
  });
};

const cleanPreviewHtml = () => {
    const content = document.querySelector("#resume .content");

    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

const createClient = async () => {
  const table = tableInput.value;
  const hour = hourInput.value;

  const timeNow = new Date();
  const timeHourAndMinutes = timeNow.getHours() + ":" + timeNow.getMinutes();

  console.log(clientObj);
  if (tableInput.value === "" || hourInput.value === "") {
    ui.showAlert("All Fields Are Required", "errorAlert");
    return;
  }
  if (tableInput.value > 8 || tableInput.value < 1) {
    ui.showAlert("Table number must be between 1 and 8", "errorAlert");
    return;
  }
  if (hourInput.value > "20:00" || hourInput.value < "08:00") {
    ui.showAlert("Our hours are from 8:00 a.m to 8:00 p.m.", "errorAlert");
    return;
  }

  clientObj = { ...clientObj, table, hour };

  hideModal();
  showSections();
  const menu = await getDishes();
  ui.showMenu(menu);
};

const addMenuElement = (items) => {
  let { order } = clientObj;

  if (items.total > 0) {
    if (order.some((item) => item.id === items.id)) {
      const orderUpdated = order.map((item) => {
        if (item.id === items.id) {
          item.total = items.total;
        }
        return item;
      });
      clientObj.order = [...orderUpdated];
    } else {
      clientObj.order = [items, ...order];
    }
  } else {
    const result = order.filter((item) => item.id !== items.id);
    clientObj.order = [...result];
  }

  cleanPreviewHtml();

  ui.showResume(clientObj);
};

export { clientData, hideModal, createClient, addMenuElement };
