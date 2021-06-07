window.addEventListener("load", SidenVises);

function SidenVises() {
  console.log("Siden vises");
  document.querySelector("#button").classList.add("puls");
  document.querySelector("#button").addEventListener("click", klik);
}

function klik() {
  console.log("knap klikket");
  document.querySelector("#button").classList.add("hide");

  document.querySelector("#element1").classList.add("right");
  document.querySelector("#element2").classList.add("down");
  document.querySelector("#element3").classList.add("up");
  document.querySelector("#element4").classList.add("left");
  document.addEventListener("animationend", Hideelements);
}

function Hideelements() {
  console.log("Gem elementerne");
  document.querySelector("#puzzle").classList.add("hide");
}
