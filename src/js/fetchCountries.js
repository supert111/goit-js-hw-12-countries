import itemsTemplate from '../templates/country-style.hbs';

var debounce = require('lodash.debounce');


const inputRef = document.querySelector('.seach-country');
inputRef.addEventListener('input', debounce(() => {
    console.log(
        'Input event handler invocation after 500ms of inactivity past burst.',
      );

    const searchQuery = inputRef.value;
    fetchCountries(searchQuery)
    .then(renderCountry)
    .catch(error => console.log(error));
  
    }, 500));


function fetchCountries(name) {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => {
    return response.json();
  })
}

function renderCountry(country) {
    if (country.length < 10) {
       const markup = itemsTemplate(country);
       inputRef.insertAdjacentHTML('afterend', markup);
   }

}
  