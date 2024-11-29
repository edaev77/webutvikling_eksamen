const hamburger = document.querySelector('.hamburger-menu');
const navContainer = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navContainer.classList.toggle('active');
});
