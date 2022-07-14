const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Scroll
var scrollTop = () => {
    var header = $(".header");
    header.scrollIntoView({ behavior: "smooth", block: "start" });
};
// Tab header
