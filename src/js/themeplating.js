import itemsTemplate from '../templates/gallery-items.hbs';
import menu from '../menu.json';

const markup = itemsTemplate(menu);
const ulMenuRef = document.querySelector('ul.js-menu')
ulMenuRef.insertAdjacentHTML('afterbegin', markup)
