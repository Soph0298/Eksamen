const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav");

hamburger.addEventListener("click", mobilMenu);

function mobilMenu() {
  console.log("burgermenu");
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
