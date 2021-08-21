import {
  clientName as client1,
  clientAge,
  showInformation,
  balance,
  Client,
} from "./cliente.js";

import { Company } from "./empresa.js";

console.log(client1);
console.log(clientAge);

console.log(showInformation(client1, clientAge), balance(50));

const client = new Client("Federico", 23);
console.log(client);



const company = new Company(
  "Luis Angel",
  20,
  "Distributor",
  "luisangel@gmail.com",
  3326264356,
  "Playa Blanca #1155",
  "brades123"
);

console.log(company.showInfo());
