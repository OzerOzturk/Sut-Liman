
/* --navigation bar-- */

const navbar = document.querySelector('.navigation-bar');
window.onscroll = () => {
    if (window.scrollY > 300) {
        navbar.classList.add('nav-active');
        navbar.classList.add('items-active');
    } else {
        navbar.classList.remove('nav-active');
        navbar.classList.remove('items-active');
    }
}; 


