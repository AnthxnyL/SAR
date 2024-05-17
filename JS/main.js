hamburger = document.querySelector('.hamburger');
nav = document.querySelector('.header__container__nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
}));