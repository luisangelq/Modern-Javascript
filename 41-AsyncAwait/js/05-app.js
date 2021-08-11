console.log("****** Consulting API using Async Await");

const url = "https://picsum.photos/list"

//With Promises
function getData(url) {
    return fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

//With Async Await
async function getDataAsync(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

setTimeout(() => {
    getData(url);
    getDataAsync(url);
}, 5000);