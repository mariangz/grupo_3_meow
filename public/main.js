const navButton = document.querySelector(".nav-button");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

navButton.addEventListener("click", mobileMenu);

navLink.forEach(link => link.addEventListener("click", closeMenu));

function mobileMenu() {
  navButton.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
  navButton.classList.remove("active");
    navMenu.classList.remove("active");
}