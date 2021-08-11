function downloadNewClients() {
  return new Promise((resolve) => {
    console.log("Downloading clients...");

    setTimeout(() => {
      console.log("****** Multiple Await *******");
      resolve("New Clients Downloaded Successfully");
    }, 4000);
  });
}

function downloadNewOrders() {
    return new Promise((resolve) => {
        console.log("Downloading orders...");

        setTimeout(() => {
            resolve("New Orders Downloaded Successfully");
        }, 5000);
    })
}

const app = async () => {
  try {
    const response = await Promise.all([downloadNewClients(), downloadNewOrders()]);
    console.log(response[0]);
    console.log(response[1]);
  } catch (error) {
    console.log(error);
  }
};

app();
