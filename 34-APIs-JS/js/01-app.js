console.log("******Notification answer******");

const notifyBtn = document.querySelector("#notify")

notifyBtn.addEventListener("click", () => {
    Notification.requestPermission().then(result => {
        console.log(result);
    })
})

const seeNotificationBtn = document.querySelector("#seeNotification")

seeNotificationBtn.addEventListener("click", () => {
    if (Notification.permission === "granted") {
        const notification = new Notification("Notification", {
            body: "This is my notification",
            icon: "img/ccj.png"
        })
        notification.onclick = () => {
            window.open("https://www.google.com")
        }
    }
})