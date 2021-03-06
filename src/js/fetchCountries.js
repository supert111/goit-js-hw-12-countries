var debounce = require('lodash.debounce');

const inputRef = document.querySelector('.seach-country');
inputRef.addEventListener('input', debounce((searchQuery) => {
    console.log(
        'Input event handler invocation after 500ms of inactivity past burst.',
      );
    }, 500));
console.dir(inputRef.value);
console.log(inputRef.value);
console.log(inputRef.textContent);
// const searchQuery = 

function searchQuery (e) {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(form.elements.query.value);
}


//{name}
//fetchCountries(searchQuery)
fetch('https://restcountries.eu/rest/v2/name/Colombia')
.then(response => {
   // console.log(response.json());

    return response.json();
  })
  .then(country => {
      console.log(country);
  })
  .catch(error => {
      console.log(error);
  });

  
  