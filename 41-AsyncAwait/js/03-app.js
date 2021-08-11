function downloadClients2() {
  return new Promise((resolve, reject) => {
    const error = false;

    setTimeout(() => {
      console.log("******* Async Await with function expression");
      if (error) {
        reject("There was an error trying to download clients");
      } else {
        resolve("Clients was download successfully");
      }
    }, 3000);
  });
}

// async await
const execute2 = async () => {
  try {
    const result = await downloadClients2();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

execute2();
