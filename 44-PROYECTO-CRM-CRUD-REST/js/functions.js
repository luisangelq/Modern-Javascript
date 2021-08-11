import { newClient, getClients, deleteClient } from "./API.js";

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const company = document.querySelector("#company");
const form = document.querySelector("#form");

const clientList = document.querySelector("#clientList");

const validateClient = (e) => {
  e.preventDefault();
  const client = {
    name: name.value,
    email: email.value,
    phone: phone.value,
    company: company.value,
  };
  if (
    client.name === "" ||
    client.email === "" ||
    client.phone === "" ||
    client.company === ""
  ) {
    printAlert("All Fields Are Required", "error");
    return;
  }

  newClient(client);
};

const showClients = async () => {
  const clients = await getClients();

  clients.forEach((client) => {
    const { id, name, email, phone, company } = client;

    const row = document.createElement("tr");
    row.innerHTML += ` <tr>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
            <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
            <p class="text-sm leading-10 text-gray-700"> ${email} </p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
            <p class="text-gray-700">${phone}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
            <p class="text-gray-600">${company}</p>
        </td>
        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
            <a href="edit-client.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Edit</a>
            <a href="#" data-client="${id}" class="text-red-600 hover:text-red-900 deleteClient">Delete</a>
        </td>
    </tr> `;
    clientList.appendChild(row);
  });
};

const confirmDeleteClient = (e) => {
  if (e.target.classList.contains("deleteClient")) {
    const clientId = Number(e.target.dataset.client);
    console.log(clientId);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteClient(clientId)
          .then(() => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            // id.target.parentElement.parentElement.remove();
          })
          .catch(() => {
            Swal.fire("Oops!", "Something went wrong!", "error");
          });
      }
    });
  }
};

const printAlert = (msg, type) => {
  Swal.fire({
    position: "top",
    icon: type,
    title: msg,
    showConfirmButton: false,
    timer: 1500,
  });
};

export { form, clientList, validateClient, showClients, confirmDeleteClient };
