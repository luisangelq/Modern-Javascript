console.log("************* && Operator  **************");

const user = false;
const canPay = true;

if (user && canPay) {
    console.log("You can buy");
} else if(!user) {
    console.log("Sign In or Log In");
}  else if(!canPay) {
    console.log("insufficient funds");
}
else {
    console.log("You Can't buy");
}