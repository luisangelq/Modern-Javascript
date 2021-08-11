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
        const result = await fetch(url)
        const data = await result.json();
        return(data);
    } catch (error) {
        console.log(error);
    }
}

const deleteClient = async (id) => {
    try {
        await fetch(`${url}/${id}`, {
            method: "DELETE",
            })
    } catch (error) {
        console.log(error);
    }
}

export { newClient, getClients, deleteClient };
