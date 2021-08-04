const container = document.querySelector('.container');
const result = document.querySelector('#result');
const form = document.querySelector('#form');

window.addEventListener('load', () => {
    form.addEventListener('submit', searchWeather);

});

function searchWeather(e) {
    e.preventDefault();

    //validate form
    const city = document.querySelector('#city').value;
    const country = document.querySelector('#country').value;
    if (city === '' || country === '') {
        showError('Please Fill All The Fields');
        return;
    }

    //Consult API
    consultAPI(city, country);
}

function consultAPI(city, country) {

}

function showError(error) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
    })
}