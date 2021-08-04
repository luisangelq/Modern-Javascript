console.log("******Fetch from json files*******");

const loadJsonBtn = document.querySelector('#loadJSON');

loadJsonBtn.addEventListener('click', () => {
    fetch('data/employe.json')
        .then(response => response.json())
        .then(json => showData(json))
        .catch(error => console.log(error))
})

const showData = ({id, name, company, job}) => {
    const content = document.querySelector('#content');
    content.innerHTML = `
        <br>
        <p>ID: ${id}</p>
        <p>Name: ${name}</p>
        <p>Company: ${company}</p>
        <p>Job: ${job}</p>
        <br>
    `
    setTimeout(() => {
        content.innerHTML = '';
    }, 3000);
}
