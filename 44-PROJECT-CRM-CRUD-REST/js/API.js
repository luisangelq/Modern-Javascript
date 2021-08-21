const url = "http://localhost:4000/clients";

const newClient = async (client) => {
  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};

//Get all clients
const getClients = async () => {
  try {
    const result = await fetch(url);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

//Get client by id
const getClientById = async (id) => {
  try {
    const result = await fetch(`${url}/${id}`);
    const data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const updateClient = async (client) => {
  try {
    await fetch(`${url}/${client.id}`, {
      method: "PUT",
      body: JSON.stringify(client),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location.href = "index.html";
  } catch (error) {
    console.log(error);
  }
};

const deleteClient = async (id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
};

export { newClient, getClients, getClientById, updateClient, deleteClient };
