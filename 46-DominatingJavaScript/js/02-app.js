console.log("***** Hoisting *****");

/* 
we have two phases, one of creation and the other of executing it.
*/

//Function Declaration
getClient("Pedro");

function getClient(name) {
    console.log("Client: " + name);
}


//Function Expression

const getClient2 = name => {
    console.log("Client: " + name);
}

getClient2("Pedro2");