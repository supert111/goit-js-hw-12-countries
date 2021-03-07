import './styles.css';
import './js/fetchCountries';
import './js/themeplating';

import { alert, defaultModules } from '.././node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '.././node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import { defaults } from '@pnotify/core';


import '@pnotify/core/dist/Material.css';
// import "@pnotify/core/dist/PNotify.css";
// import "@pnotify/core/dist/BrightTheme.css";




defaults.styling = 'material';
defaults.icons = 'material';

 
defaultModules.set(PNotifyMobile, {});

alert({
  text: 'Too many matches found. Please enter a more specific query!'
});
