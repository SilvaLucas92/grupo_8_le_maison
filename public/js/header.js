
window.addEventListener('load', () => {
    const iconMenu = document.querySelector('#icon-bar');
    const menu = document.querySelector('#menu');

    iconMenu.addEventListener('click', (e) => {
        menu.classList.toggle('active');
    });
})