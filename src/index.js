import { initialPageLoad } from "./intial-page-load";
import './style.css';
import { menuPageLoad } from './menu-page';
import { contactPageLoad } from './contact-page';

initialPageLoad();

let claim = document.querySelector('#claim');
let menuInitalLoad = false;
let contactInitialLoad = false;

document.querySelector('#menu').addEventListener('click', () => {
    claim.style.display = 'none';
    if (!menuInitalLoad) {
        menuPageLoad();
        menuInitalLoad = true;
    } else {
        document.querySelector('.menu-window').style.display = 'block';
        document.querySelector('#flex-container').style.marginTop = '0vh';
    }
    document.querySelector('.contact-window').style.display = 'none';
});

document.querySelector('#contact').addEventListener('click', () => {
    claim.style.display = 'none';
    if (!contactInitialLoad) {
        contactPageLoad();
        contactInitialLoad = true;
    } else {
        document.querySelector('.contact-window').style.display = 'block';    
        document.querySelector('#flex-container').style.marginTop = '0vh';
    }
    document.querySelector('.menu-window').style.display = 'none';
});

document.querySelector('h1').addEventListener('click', () => {
    document.querySelector('.menu-window').style.display = 'none';
    document.querySelector('.contact-window').style.display = 'none';
    claim.style.display = 'flex';
    document.querySelector('#flex-container').style.marginTop = '25vh';
});