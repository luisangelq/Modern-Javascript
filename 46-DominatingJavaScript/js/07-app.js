console.log("***** Event Loop ******");

//They are like priorities, each one is executed before the next one
//There are elements that are executed before the others

console.log("First");

setTimeout(() => {
  console.log("Second");
}, 0);

console.log("Third");

setTimeout(() => {
  console.log("Fourth");
}, 0);

new Promise((resolve) => {
  resolve("Fifth");
}).then(console.log);

console.log("Sixth");

function a() {
  console.log("Seventh");
}
a();
