console.log("********Callbacks Examples*********");

const countries = ["France", "Germany", "USA"];

function newCountry(country, cb) {

    setTimeout(function () {
        countries.push(country);
        cb();

    }, 2000);
}

function showCountries() {
    setTimeout(() => {
        countries.forEach((country) => {
            console.log(country);
        })
    }, 1000);
}

showCountries()

newCountry("UK", showCountries);