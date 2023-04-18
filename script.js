const x = document.querySelector(".x");
console.log(x);
const hamburger = document.querySelector(".hamburger");
console.log(hamburger);
const menu = document.querySelector(".menu");

x.addEventListener("click", function () {
  menu.style.display = "none";
});

hamburger.addEventListener("click", function () {
  menu.style.display = "block";
});
