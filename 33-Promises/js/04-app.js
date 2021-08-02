console.log("******CallBack Hell with promises*****");

const countries = [];

const newCountry = (country) => new Promise((resolve, reject) => {
    setTimeout(() => {
        countries.push(country);
        resolve(`Added: ${country}` );
    }, 1000);
});

newCountry("Argentina")
    .then(() => {
        console.log(countries);
        return newCountry("Brazil");
    }).then(() => {
        console.log(countries);
        return newCountry("Chile");
    }).then(() => {
        console.log(countries);
    })