console.log("******Fretch from JSON array*****");

const loadJSONArrayBtn = document.querySelector("#loadJSONArray");

loadJSONArrayBtn.addEventListener("click", () => {
  fetch("data/employes.json")
    .then((response) => response.json())
    .then((json) => showArrayData(json))
    .catch((err) => console.log(err));
});

const showArrayData = (json) => {
  const content = document.querySelector("#content");

  json.forEach((employee) => {
    const { id, name, company, job } = employee;
    content.innerHTML += `
        <br>
        <p>ID: ${id}</p>
        <p>Name: ${name}</p>
        <p>Company: ${company}</p>
        <p>Job: ${job}</p>
        <br>
        `;
  });

  setTimeout(() => {
      content.innerHTML = "";
  }, 5000);
};
