console.log("************* switch  **************");

const payForm = "card"

switch (payForm) {
    case "cash":
        console.log(`You pay with ${payForm}`);
        break;
    case "card":
        pay();
        break;
    default:
        console.log("You haven't chosen any form of payment");
        break;
}

function pay() {
    console.log("Paying...");
}