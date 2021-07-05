document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", addTweet);
});

const form = document.querySelector("#form");
const tweetsList = document.querySelector("#tweets-list");
let tweets = [];

const addTweet = (e) => {
  e.preventDefault();

  const tweet = document.querySelector("#tweet").value;
  console.log(tweet);

  if (tweet === "") {
    showError("You Should Write Something");
    return;
  }

  const tweetObj = {
    id: Date.now(),
    tweet
  };
  tweets = [...tweets, tweetObj];
  console.log(tweets);
};

const showError = (error) => {
  const checkError = document.querySelector(".error");
  if (checkError) {
    checkError.remove();
  }

  const errorMessage = document.createElement("p");
  errorMessage.textContent = error;
  errorMessage.classList.add("error");

  const content = document.querySelector("#contenido");
  content.appendChild(errorMessage);

  setTimeout(() => {
    errorMessage.remove();
  }, 2000);
};
