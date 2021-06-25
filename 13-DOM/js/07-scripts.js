console.log("************Delete DOM Elements************");

const firstLink = document.querySelector("a")
firstLink.remove();

const navigation2 = document.querySelector(".navegacion")
navigation2.removeChild(navigation2.children[1])

console.log(navigation2.children);
