console.log("****** Fetch API *******");

const loadAPI = document.querySelector("#loadAPI");

loadAPI.addEventListener("click", () => {
    fetch("https://picsum.photos/list")
        .then(response => response.json())
        .then(json => showResultAPI(json))
        .catch(error => console.log(error));
})

const showResultAPI = (json) => {
    const content = document.querySelector("#content");

    for (let i = 0; i < 10; i++) {
        const { author, post_url } = json[i];
          content.innerHTML += `
            <p>Author: ${author}</p>
            <a class="link-warning" href="${post_url}" target="_blank">Whatch image</a>
            <br>  
          `;
    }
    // json.forEach(item => {
    //     const {author, post_url} = item;
    //     content.innerHTML += `
            
    //     `;
    // })

    setTimeout(() => {
        
    }, 3000);
}