let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("#nav");
let movedown = document.querySelector(".movedown");

hamburger.addEventListener('click', () => {
    nav.classList.toggle("openclose");
    movedown.classList.toggle("move");
})

nav.addEventListener('click', () => {
    nav.classList.remove('openclose');
    movedown.classList.remove("move");
})