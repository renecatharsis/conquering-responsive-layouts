const navToggle = document.querySelector('.navbar__burger');
const nav = document.querySelector('.navbar__nav');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('navbar__nav--visible');
})