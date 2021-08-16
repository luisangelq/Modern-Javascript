console.log("********* Scope **********");

/* Scope of a variable 
- Scope Global
- Scope Local
*/

const login = true;
const client = "Federico";

const loggedClient = () => {
    const client = "Luis"
    console.log(client);

    if (login) {
        const client = "Admin";
        console.log(client);
    }
}

loggedClient();

console.log(client);
