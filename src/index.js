import { initialPageLoad } from "./intial-page-load";
import './style.css';
import { menuPageLoad } from './menu-page';

initialPageLoad();

let claim = document.querySelector('#claim');
let menuInitalLoad = false;

document.querySelector('#menu').addEventListener('click', () => {
    claim.style.display = 'none';
    if (!menuInitalLoad) {
        menuPageLoad();
        menuInitalLoad = true; 
    } else {
        document.querySelector('.menu-window').style.display = 'block';
        document.querySelector('#flex-container').style.marginTop = '0vh';
    }
});

document.querySelector('h1').addEventListener('click', () => {
    document.querySelector('.menu-window').style.display = 'none';
    claim.style.display = 'flex';
    document.querySelector('#flex-container').style.marginTop = '25vh';
});