window.addEventListener("load", SidenVises);

function SidenVises() {
  console.log("Siden vises");
  document.querySelector("#element1").classList.add("right");
  document.querySelector("#element2").classList.add("down");
  document.querySelector("#element3").classList.add("up");
  document.querySelector("#element4").classList.add("left");
}
