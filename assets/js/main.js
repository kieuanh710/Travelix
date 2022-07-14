const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const topBar = $('.topbar');
const navBar = $('.navbar');
// Scroll
window.addEventListener('scroll', function scrollFunction(){
    if(document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
        topBar.classList.add('hide')
        navBar.classList.add('scroll')
    } else {
        topBar.classList.remove('hide')
        navBar.classList.remove('scroll')
    }      
});




// Tab header
