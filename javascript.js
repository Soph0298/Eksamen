window.addEventListener("load", SidenVises);

function SidenVises() {
  console.log("Siden vises");
  document.querySelector("header").classList.add("hide");
  document.querySelector("#temaer_hide").classList.add("hide");
  document.querySelector("#button").addEventListener("click", klik);
}

function klik() {
  console.log("knap klikket");
  document.querySelector("#button").classList.add("hide");
  document.querySelector("#element1").classList.add("right");
  document.querySelector("#element2").classList.add("down");
  document.querySelector("#element3").classList.add("up");
  document.querySelector("#element4").classList.add("left");
  document.querySelector("#element5").classList.add("down");

  document.addEventListener("animationend", hideElements);
}

function hideElements() {
  console.log("Gem elementerne");
  document.querySelector("#element1").classList.add("hide");
  document.querySelector("#element2").classList.add("hide");
  document.querySelector("#element3").classList.add("hide");
  document.querySelector("#element4").classList.add("hide");
  document.querySelector("#temaer_hide").classList.remove("hide");
  document.querySelector("header").classList.remove("hide");
  document.querySelector(".orange1").classList.add("puls");
  document.querySelector(".orange2").classList.add("puls");
  document.querySelector(".figur2").classList.add("puls2");
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav");

hamburger.addEventListener("click", mobilMenu);

function mobilMenu() {
  console.log("burgermenu");
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
