console.log("******Detect when we are seeing the page visibilityState");

document.addEventListener("visibilitychange", function() {
    if (document.visibilityState === "visible") {
        console.log("We are now visible");
    }
    else {
        console.log("We are now hidden");
    }
});