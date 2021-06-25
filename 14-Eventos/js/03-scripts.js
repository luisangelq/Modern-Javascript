console.log("************Board Events************");

const search = document.querySelector(".busqueda");

search.addEventListener("input", (e) => {
    console.log(e.target.value);
})

//keyup -> when you release the key 
//blur -> when you leave the input 
//copy -> when you copy text with Ctrl + c
//paste -> when you paste text with Ctrl + v
//input -> its everything except blur