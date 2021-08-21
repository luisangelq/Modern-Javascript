document.addEventListener("DOMContentLoaded", () => {
  form.addEventListener("submit", addTweet);

  tweets = JSON.parse(localStorage.getItem("tweets")) || [];
  createHTML();
});

//Variables
const form = document.querySelector("#form");
const tweetsList = document.querySelector("#tweets-list");
let tweets = [];

//Add Tweet
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
    tweet,
  };
  tweets = [tweetObj, ...tweets];

  createHTML();

  form.reset();
};

//Show tweet list
function createHTML() {
  cleanHTML();

  if (tweets.length > 0) {
    tweets.forEach((tweet) => {
      //Add button to delete
      const btnDelete = document.createElement("a");
      btnDelete.classList.add("borrar-tweet");
      btnDelete.textContent = "X";
      btnDelete.onclick = () => {
        deleteTweet(tweet.id);
      }

      const li = document.createElement("li");
      li.textContent = tweet.tweet;

      li.appendChild(btnDelete)

      tweetsList.appendChild(li);
    });
  }

  storageSync();
}
//Add tweets to local Storage
const storageSync = () => {
  localStorage.setItem("tweets", JSON.stringify(tweets));
};

//clean HTML
const cleanHTML = () => {
  while (tweetsList.firstChild) {
    tweetsList.removeChild(tweetsList.firstChild);
  }
};

//Delete Tweet
const deleteTweet = (id) => {
  tweets = tweets.filter(tweet => tweet.id != id)
  createHTML()
}
//show Error
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
