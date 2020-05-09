var openMenu = document.querySelector("#open-menu").addEventListener("click", function (e) {
  e.preventDefault();
  var menu = document.getElementById("menu");
  menu.classList.add("active");
});

var openMenu = document.querySelector("#close-menu").addEventListener("click", function (e) {
  e.preventDefault();
  var menu = document.getElementById("menu");
  menu.classList.remove("active");
});