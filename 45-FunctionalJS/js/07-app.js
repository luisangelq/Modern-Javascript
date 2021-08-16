console.log("******* Closures ******");

//Its a way to acess the variables in the scope of the function
const getClient4 = () => {
    const name = "John";

    function showName() {
        console.log(name);
    }

    return showName
}

const client = getClient4();

client();