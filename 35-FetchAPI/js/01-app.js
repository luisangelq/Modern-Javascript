console.log("****Fetch from txt files*****");
const loadTextBtn = document.querySelector('#loadTxt');

loadTextBtn.addEventListener('click', () => {
    fetch('data/data.txt')
        .then(response => {
            console.log(response);
            return response.text();
        })
        .then(text => {
            console.log(text);
        })
        .catch(error => {
            console.log(error);
        })
})