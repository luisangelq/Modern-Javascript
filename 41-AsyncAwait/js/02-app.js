function downloadClients() {
  return new Promise((resolve, reject) => {
    const error = false;

    setTimeout(() => {
      console.log("******* Async Await *******");
      if (error) {
        reject("There was an error trying to download clients");
      } else {
        resolve("Clients was download successfully");
      }
    }, 2000);
  });
}

// async await
async function execute() {
  try {
    const result = await downloadClients();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

execute();

//father function needs to be async and child function needs to be await
