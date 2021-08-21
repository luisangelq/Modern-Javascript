console.log("*************How functions communicate****************");


startApp();

function startApp() {
    console.log("Starting App...");
    logIn()
}

function logIn() {
    let name = prompt("Enter your Name");
    logInSuccess(name)
}

function logInSuccess(name) {
    console.log(name === null || "" ? "Welcome Guest" : `Welcome ${name}` );
}