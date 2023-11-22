// faire apparaître burger menu
var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");
var filter = document.querySelector(".filter");

var toggleMenu = function toggleMenu() {
  menu.classList.toggle("is-active");
  filter.classList.toggle("is-active");
};

burger.addEventListener("click", toggleMenu);
filter.addEventListener("click", toggleMenu);
