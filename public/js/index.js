let btnNavbarMobile = document.querySelector("button.mobile-btn-menu");
let closeNavbarMobile = document.querySelector("svg.mobile-btn-menu");
let navbar = document.querySelector(".mobile-navbar");

btnNavbarMobile.addEventListener("click", () => {
    navbar.classList.toggle("hidden");
});
closeNavbarMobile.addEventListener("click", () => {
    navbar.classList.toggle("hidden");
});