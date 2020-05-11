// Open menu button
var openMenu = document.querySelector("#open-menu").addEventListener("click", function (e) {
  e.preventDefault();
  var menu = document.getElementById("menu");
  menu.classList.add("active");
});

// Close menu button
var openMenu = document.querySelector("#close-menu").addEventListener("click", function (e) {
  e.preventDefault();
  var menu = document.getElementById("menu");
  menu.classList.remove("active");
});

// Preloader options
paceOptions = {
  ajax: true,
  document: true,
  eventLag: false
};

// Preloader options - Styles layer
Pace.on('done', function () {
  $('loader').delay(500).animate({
    top: '30%',
    opacity: '0'
  }, 2000, $.bez([0.19, 1, 0.22, 1]));

  $("#preloader").delay(500).animate({
    top: '-1000'
  }, 4000, $.bez([0.19, 1, 0.22, 1]));
});