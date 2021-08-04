console.log("******Detect internet conection******");

window.addEventListener("online", updateState);
window.addEventListener("offline", updateState);

function updateState() {
    if (navigator.onLine) {
        console.log("You are online");
    } else {
        console.log("You are offline");
    }
} 