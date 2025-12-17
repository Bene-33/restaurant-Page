import './style.css';
import { loadHome } from './home.js';
import { loadMenu } from './menu.js';
import { loadAbout } from './about.js';

loadHome();

document.querySelector('#homeButton').addEventListener('click', () => {
    loadHome();
});

document.querySelector('#menuButton').addEventListener('click', () => {
    loadMenu();
});

document.querySelector('#aboutButton').addEventListener('click', () => {
    loadAbout();
});