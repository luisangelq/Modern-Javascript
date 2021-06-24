console.log("************Modify Text and images with JS************");

const header2 = document.querySelector(".contenido-hero h1");

console.log(header2);
console.log(header2.innerText); //if we put visibility: hidden in CSS it can't find
console.log(header2.textContent); // its gonna appear 
console.log(header2.innerHTML); // get the html

header2.textContent = "Im changing the text"
console.log(header2.textContent);