console.log("*****Speech Recognition*******");

const output = document.querySelector("#output");
const input = document.querySelector("#input");

input.addEventListener("click", speechAPI);

function speechAPI() {
    const speechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition
    const recognition = new speechRecognition();

    recognition.start();
    recognition.onstart = function() {
        output.classList.add("mostrar");
        output.textContent = "Listening...";
    }
    recognition.onspeechend = function() {
        output.textContent = "It stopped recording";
        recognition.stop();
    }
    recognition.onresult = function(event) {
        console.log(event.results[0][0]);

        const {transcript, confidence} = event.results[0][0];


        const speech = document.createElement("div");
        speech.innerHTML = `
        <p>Recorded: ${transcript}</p>
        <p>Confidence: ${parseInt(confidence*100)}%</p>
        `

        output.appendChild(speech);

    }
}