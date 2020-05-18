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

// Img Charge - redifine absolute
$("img").each(function() {

  $(this).attr("data-src",$(this).attr("src"));

  // Se remueve el atributo para pruebas en local
  // $(this).removeAttr("src");

  // Test de Funcionamiento
  // console.log($(this)[0].outerHTML);

});

// function for added lazyload class, for all img's in the DOM
function addLazyLoad() {
  var lazyLoad = document.querySelectorAll("img");
  for (var i = 0; i > lazyLoad.length; i++)
    lazyLoad[i].className += " lazyload";
}

// Run Lazyload
addLazyLoad();

// Carousel for 3 items
$('#carousel-projects').on('slide.bs.carousel', function (e) {

	var $e = $(e.relatedTarget);
	var idx = $e.index();
	var itemsPerSlide = 4;
	var totalItems = $('.carousel-item').length;

	if (idx >= totalItems - (itemsPerSlide - 1)) {
		var it = itemsPerSlide - (totalItems - idx);
		for (var i = 0; i < it; i++) {
			// append slides to end
			if (e.direction == "left") {
				$('.carousel-item').eq(i).appendTo('.carousel-inner');
			}
			else {
				$('.carousel-item').eq(0).appendTo('.carousel-inner');
			}
		}
	}

});