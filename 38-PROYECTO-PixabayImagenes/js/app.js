const result = document.querySelector("#result");
const form = document.querySelector("#form");

const recordsPerPage = 30;
let totalPages;
let pages;

window.onload = () => {
  form.addEventListener("submit", validateForm);
};

function validateForm(e) {
  e.preventDefault();

  const topic = document.querySelector("#topic").value;

  if (topic === "") {
    showAlert("Topic is required");
    return;
  }

  searchImages(topic);
}

function showAlert(message) {
  if (!document.querySelector(".alert-error")) {
    const alert = document.createElement("div");
    alert.classList.add(
      "bg-red-200",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center",
      "alert-error"
    );
    alert.innerHTML = `
    <strong class="font-bold">Error!</strong>
    <span class="block sm:inline">${message}</span>
  `;
    form.appendChild(alert);

    setTimeout(() => {
      alert.remove();
    }, 3000);
  }
}

function searchImages(topic) {
  const key = "22805124-d050eb8070bbfa21bdc6846ec";
  const url = `https://pixabay.com/api/?key=${key}&q=${topic}&per_page=${recordsPerPage}`;

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      totalPages = calculatePages(json);
      showImages(json.hits)
    })
    .catch((error) => console.log(error));
}

function calculatePages(images) {
  return Math.ceil(images.totalHits / recordsPerPage);
}

//Generator for each page
function *generatePages(totalPages) {
  for (let i = 1; i <= totalPages; i++) {
    yield i
  }
}

function showImages(images) {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }

  images.forEach((image) => {
    const { previewURL, likes, views, largeImageURL } = image;

    result.innerHTML += `
        <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4 "> 
          <div class="">
            <img class="w-full" src="${previewURL}">

            <div class="text-center bg-white p-4">
              <p ><span class="font-bold">${likes}</span> Likes</p>
              <p ><span class="font-bold">${views}</span> Views</p>

              <a class="block w-full bg-blue-600 hover:bg-blue-400 text-white uppercase font-bold rounded" 
              href="${largeImageURL}" 
              rel="noopener noreferrer" 
              target="_blank">
                Watch Image
              </a>
            </div>
          </div>
          
        </div>
      `;
  });

  
  printPages();
}

function printPages() {
  pages = generatePages(totalPages);
  console.log(pages.next().value);
  console.log(totalPages);
}
