document.addEventListener("DOMContentLoaded", function(event) {
  event.preventDefault();
  var Wrap = document.getElementById("wrap-wrap").classList.add(
    "overflow-auto",
    "border-0"
  );
  var headerActive = document.querySelector("header").classList.add(
    "active",
    "box-shadow-sm"
  );
});