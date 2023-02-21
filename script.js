'use strict'

const blackBtn = document.querySelector('.blackBtn');
const burgerLink = document.querySelector('.burger-link');
const menu = document.querySelector('.menu');


blackBtn.addEventListener('click', () => {
    menu.classList.remove('open');
})


burgerLink.addEventListener('click', () => {
    menu.classList.toggle('open');
})