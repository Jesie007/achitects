"use strict";

const section = document.querySelector(".projects");
const initalCoords = section.getBoundingClientRect();
console.log(initalCoords);
window.addEventListener("scroll", function () {
  console.log(window.scrollY);

  if (window.scrollY > initalCoords.top) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
});
