import itemsTemplate from '../templates/country-style.hbs';
import countryWrapper from '../templates/country-wrapper.hbs';
import {alert, defaultModules, PNotifyMobile} from '../index';
//import { from } from 'core-js/fn/array';

var debounce = require('lodash.debounce');


const inputRef = document.querySelector('.seach-country');
 


    
inputRef.addEventListener('input', debounce(() => {

    if (document.querySelector('ul')) {
        clearClassList ();
    }
    if (document.querySelector('div')){
        clearClassList ();
    }
    // const clearSeachRef = document.querySelector('ul')
    // console.log(clearSeachRef)
    
    
    console.log(
        'Input event handler invocation after 500ms of inactivity past burst.',
      );

    const searchQuery = inputRef.value;
    fetchCountries(searchQuery)
    .then(renderCountry)
    .catch(error => console.log(error));
  
    }, 500));

    // fetchCountries(searchQuery)
    // .then(renderCountry)
    // .catch(error => console.log(error));

function fetchCountries(name) {
  return fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => {
    return response.json();
  })
}

function renderCountry(country) {
    if (country.length >= 10) {
        defaultModules.set(PNotifyMobile, {});
    
        alert({
            text: 'Too many matches found. Please enter a more specific query!'
         });
         if(defaultModules.set(PNotifyMobile, {})) {
             return;
         }
   }
   if(country.length === 1) {
       const markupFull = countryWrapper(country);
       inputRef.insertAdjacentHTML('afterend', markupFull);
   }
    else {
        const markup = itemsTemplate(country);
        inputRef.insertAdjacentHTML('afterend', markup);
        
    }
}
  
function clearClassList ()  {
    const clearSeachRef = document.querySelector('ul');
    clearSeachRef.innerHTML = '';
}