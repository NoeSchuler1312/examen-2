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

var closeMenu = function closeMenu(event) {
  if (!event.target.classList.contains("menu")) {
    menu.classList.remove("is-active");
    filter.classList.remove("is-active");
  }
};

burger.addEventListener("click", toggleMenu);
filter.addEventListener("click", closeMenu);

// faire apparaître/disparaître carte
var maplink = document.querySelector(".map-link");
var map = document.querySelector(".map");

var toggleMap = function toggleMap(event) {
  if (!event.target.classList.contains("map")) {
    map.classList.toggle("is-active");
    filter.classList.toggle("is-active");
  }
};

var closeMap = function closeMap(event) {
  if (!event.target.classList.contains("map")) {
    map.classList.remove("is-active");
    filter.classList.remove("is-active");
  }
};

maplink.addEventListener("click", toggleMap);
filter.addEventListener("click", closeMap);

// musique + bouton pour le son
window.addEventListener("DOMContentLoaded", (event) => {
  const audio = document.querySelector("audio");
  audio.volume = 0.5;
  audio.play();

  var mute = document.querySelector(".button-mute");

  var toggleMute = function toggleMute(event) {
    mute.classList.toggle("is-off");

    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  mute.addEventListener("click", toggleMute);
});
