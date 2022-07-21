const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Header sticky
const topBar = $('.topbar');
const navBar = $('.navbar');

// Scroll
window.addEventListener('scroll', function scrollFunction(){
    if(document.documentElement.scrollTop > 30 || document.body.scrollTop > 30) {
        topBar.classList.add('hide')
        navBar.classList.add('scroll')
    } else {
        topBar.classList.remove('hide')
        navBar.classList.remove('scroll')
    }      
});
// Scroll top
// const scrollTop = $('.scroll-top');

// scrollTop.addEventListener('click', () => {
//     window.scrollTo(0, 0);
// });
// window.addEventListener('scroll', function srcollDisplay(){
//     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//         scrollTop.style.display = "block";
//       } else {
//         scrollTop.style.display = "none";
//       }
// })


// Tab header link
const tabItem = $$('.navbar_container-item');
const tabLink = $$('.navbar_container-link');

tabItem.forEach((tab, index) => {

    tab.onclick = function () {
        // console.log(link);
        $('.navbar_container-item.active').classList.remove('active')
        $('.navbar_container-link.active').classList.remove('active')      
        
        this.classList.add('active');
        link.classList.add('active');
        
        // console.log(this);
    }
});
 
// Search btn
const iconSearch = $('.navbar_container-search-icon');
const inputSearch = $('.navbar_container-search-input');

iconSearch.addEventListener('click', () => {
    inputSearch.classList.toggle('active');
});

// Search header item
const searchItem = $$('.search_header-item');
searchItem.forEach((search, index) => {
    search.onclick = function () {
        $('.search_header-item.active').classList.remove('active')
        this.classList.add('active');
        // console.log(this);
    }
});

// console.log(searchItem)