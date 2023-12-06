// faire apparaître/disparaître burger menu
var burger = document.querySelector(".burger");
var menu = document.querySelector(".menu");
var filter = document.querySelector(".filter");

var toggleMenu = function toggleMenu(event) {
  if (!event.target.classList.contains("menu")) {
    menu.classList.toggle("is-active");
    filter.classList.toggle("is-active");
  }
};

burger.addEventListener("click", toggleMenu);
filter.addEventListener("click", toggleMenu);

// musique + bouton pour le son
window.addEventListener("DOMContentLoaded", (event) => {
  const audio = document.querySelector("audio");
  audio.volume = 0.5;
  audio.play();
});

var mute = document.querySelector(".button-mute");

var toggleMute = function toggleMute(event) {
  mute.classList.toggle("is-off");
};

mute.addEventListener("click", toggleMute);
