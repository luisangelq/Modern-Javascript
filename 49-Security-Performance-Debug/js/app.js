const cryptoSelect = document.querySelector("#cryptocurrency");
const currencySelect = document.querySelector("#currency");
const result = document.querySelector("#result");
const form = document.querySelector("#form");

let obj = {
  currency: "",
  cryptocurrency: "",
};

document.addEventListener("DOMContentLoaded", () => {
  consultCrypto();

  currencySelect.addEventListener("change", (e) => {
    obj.currency = e.target.value;
  });
  cryptoSelect.addEventListener("change", (e) => {
    obj.cryptocurrency = e.target.value;
    console.log(obj);
  });

  form.addEventListener("submit", validateFields);
});

const consultCrypto = () => {

  //Execution time
  const start = performance.now(); 

  const url =
    "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

  fetch(url)
    .then((response) => response.json())
    .then((data) => new Promise((resolve) => resolve(data.Data)))
    .then((cryptoData) => getCrypto(cryptoData, start))
    .catch((error) => console.log(error));
};

const getCrypto = (cryptoData, executeTime) => {
  const start = performance.now(); 
  console.log(cryptoData);
  // cryptoData.forEach((crypto) => {
  //   const { FullName, Name } = crypto.CoinInfo;

  //   const option = document.createElement("option");
  //   option.value = Name;
  //   option.textContent = FullName;
  //   cryptoSelect.appendChild(option);
  // });

  for (let i = 0; i < cryptoData.length; i++) {
    const { FullName, Name } = cryptoData[i].CoinInfo;

    const option = document.createElement("option");
    option.value = Name;
    option.textContent = FullName;
    cryptoSelect.appendChild(option);
    
  }

  const end = performance.now();

  console.log(end - start);
};

const validateFields = (e) => {
  e.preventDefault();

  const { cryptocurrency, currency } = obj;
  if (cryptocurrency === "" || currency === "") {
    showAlert("Both Fields Are Required");
    return;
  }

  calculateResult(cryptocurrency, currency);
  form.reset();
};

const calculateResult = (cryptocurrency, currency) => {
  showSpinner();
  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => new Promise((resolve) => resolve(data)))
    .then((quote) => showQuote(quote.DISPLAY[cryptocurrency][currency]))
    .catch((error) => console.log(error));
};

const showQuote = (quote) => {
  const { PRICE, HIGHDAY, LOWDAY, LASTUPDATE } = quote;
  result.innerHTML = `
    <div class="quote">
      <p><span>Price:</span> ${PRICE} </p>
      <p><span>High:</span> ${HIGHDAY} </p>
      <p><span>Low:</span> ${LOWDAY} </p>
      <p><span>Last Update:</span> ${LASTUPDATE} </p>
    </div>
  `;

  obj = {
    cryptocurrency: "",
    currency: "",
  };
  console.log(quote);
};

const showAlert = (message) => {
  result.innerHTML = `
      <div class="error">
        ${message}
      </div>
    `;

  setTimeout(() => {
    result.innerHTML = "";
  }, 3000);
};

const showSpinner = () => {
  result.innerHTML = `
  <div class="spinner">
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
  </div>
`;
};
