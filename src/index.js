'use strict';
import './assets/js/navigation.js';
import './assets/js/asyncDataLoad.js';
import './assets/js/slider.js';
import './assets/js/modalWindow.js';

import './assets/css/reset.css';
import './assets/scss/styles.scss';




//в файл utils
async function loadJson (url, options) {
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (e) {
    console.error(e);
  }
}







