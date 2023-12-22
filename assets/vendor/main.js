/**
* Template Name: MyResume - v2.1.0
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

function setForceDark() {
	let classes = document.getElementById('getElem');
	if (classes) {
		classes.style["background-color"] = "rgb(37, 37, 37)";
		classes.style["color"] = "white";
	}
	classes = document.getElementById('formID');
	if (classes) {
		classes.style["background-color"] = "rgb(37, 37, 37)";
		classes.style["color"] = "white";
	}
	classes = document.getElementById('footer');
	if (classes) {
		classes.style["background-color"] = "rgb(40, 40, 40)";
		classes.style["color"] = "white";
	}
	classes = document.getElementById('header');
	if (classes) {
		screen = window.screen;
		if (screen.width < 993) {
			classes.style["background-color"] = "rgb(40, 40, 40)";
		}
		classes.style["color"] = "white";
	}
	for (let i = 0; i < 4; i++) {
		classes = document.getElementById(`toggle${i}`);
		if (classes) {
			classes.style["background-color"] = "rgb(83, 82, 82)";
			classes.style["color"] = "white";
		}
	}
	for (let i = 0; i < 4; i++) {
		classes = document.getElementById(`togglethis${i}`);
		if (classes) {
			classes.style["background-color"] = "rgb(83, 82, 82)";
			classes.style["color"] = "white";
		}
	}
	for (let i = 0; i < 7; i++) {
		classes = document.getElementById(`changeColor${i}`);
		if (classes) {
			classes.style["background-color"] = "rgb(37, 37, 37)";
			classes.style["color"] = "white";
		}
	}
	for (let i = 0; i < 20; i++) {
		classes = document.getElementById(`Color${i}`);
		if (classes) {
			classes.style["background-color"] = "rgb(37, 37, 37)";
			classes.style["color"] = "white";
		}
	}
	for (let i = 0; i < 10; i++) {
		classes = document.getElementById(`Colors${i}`);
		if (classes) {
			classes.style["background-color"] = "rgb(37, 37, 37)";
			classes.style["color"] = "white";
		}
	}
}



function setForceDark2() {
	let classes = document.getElementById('getElem');
	if (classes) {
		classes.style["background-color"] = "";
		classes.style["color"] = "";
	}
	classes = document.getElementById('formID');
	if (classes) {
		classes.style["background-color"] = "";
		classes.style["color"] = "";
	}
	classes = document.getElementById('footer');
	if (classes) {
		classes.style["background-color"] = "";
		classes.style["color"] = "";
	}
	classes = document.getElementById('header');
	if (classes) {
		classes.style["background-color"] = "";
		classes.style["color"] = "";
	}
	for (let i = 0; i < 4; i++) {
		classes = document.getElementById(`toggle${i}`);
		if (classes) {
			classes.style["background-color"] = "";
			classes.style["color"] = "";
		}
	}
	for (let i = 0; i < 4; i++) {
		classes = document.getElementById(`togglethis${i}`);
		if (classes) {
			classes.style["background-color"] = "";
			classes.style["color"] = "";
		}
	}
	for (let i = 0; i < 7; i++) {
		classes = document.getElementById(`changeColor${i}`);
		if (classes) {
			classes.style["background-color"] = "";
			classes.style["color"] = "";
		}
	}
	for (let i = 0; i < 20; i++) {
		classes = document.getElementById(`Color${i}`);
		if (classes) {
			classes.style["background-color"] = "";
			classes.style["color"] = "";
		}
	}
	for (let i = 0; i < 10; i++) {
		classes = document.getElementById(`Colors${i}`);
		if (classes) {
			classes.style["background-color"] = "";
			classes.style["color"] = "";
		}
	}
}

let screen;
let darkItem = JSON.parse(localStorage.getItem('darkItem'));
if (darkItem) {
	darkmode();
} else {
	lightmode(false);
}

function lightmode(isIt) {
	localStorage.setItem("darkItem", false);
	var element = document.body;
	if (isIt) {
		element.classList.toggle("dark-mode");
	}
	document.getElementById('toChange').innerText = 'Click Here to Activate the Dark Mode ( Under Developement )';
	setForceDark2();
}

function darkmode() {
	localStorage.setItem("darkItem", true);
	document.getElementById('toChange').innerText = 'Dark Mode is Currently Active';
	var element = document.body;
	element.classList.toggle("dark-mode");
	setForceDark();
}

function myFunction() {
	let darkItem2 = JSON.parse(localStorage.getItem('darkItem'));
	if (!darkItem2) {
		darkmode();
	} else {
		lightmode(true);
	}
}

function loadTypeTextAnimation() {
	var i = 0;
	var speed = 100;
	var index = 0;
	var showDesignations = '';
	let data = [
		"Front-end Developer",
		"Back-end Developer",
		"Full Stack Developer",
		"Web Application Developer",
		"Backend Developer"
	];

	let text = data[index];

	function startTyping() {
		if (i < text.length) {
			showDesignations += text.charAt(i);
			document.getElementById('typing').innerHTML = showDesignations;
			i++;
			setTimeout(startTyping, speed);
		} else {
			reverseTyping();
		}
	}

	function reverseTyping() {
		if (i != 0) {
			showDesignations = showDesignations.substring(0, showDesignations.length - 1);
			document.getElementById('typing').innerHTML = showDesignations
			i--;
			setTimeout(reverseTyping, speed);
		} else {
			index++;
			if (data.length == index) {
				index = 0;
			}
			text = data[index];
			startTyping();
		}
	}

	startTyping();
}

loadTypeTextAnimation()


!(function ($) {
	"use strict";

	// Preloader
	// $(window).on('load', function () {
	// 	if ($('#preloader').length) {
	// 		$('#preloader').delay(100).fadeOut('slow', function () {
	// 			$(this).remove();
	// 		});
	// 	}
	// });

	// Hero typed
	// if ($('.typed').length) {
	// 	var typed_strings = $(".typed").data('typed-items');
	// 	console.log('sfdsfsdf',typed_strings)
	// 	// typed_strings = typed_strings.split(',')
	// 	new Typed('.typed', {
	// 		strings: typed_strings,
	// 		loop: true,
	// 		typeSpeed: 100,
	// 		backSpeed: 50,
	// 		backDelay: 2000
	// 	});
	// }

	// Smooth scroll for the navigation menu and links with .scrollto classes
	$(document).on('click', '.nav-menu a, .scrollto', function (e) {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			if (target.length) {
				e.preventDefault();

				var scrollto = target.offset().top;

				$('html, body').animate({
					scrollTop: scrollto
				}, 1500, 'easeInOutExpo');

				if ($(this).parents('.nav-menu, .mobile-nav').length) {
					$('.nav-menu .active, .mobile-nav .active').removeClass('active');
					$(this).closest('li').addClass('active');
				}

				if ($('body').hasClass('mobile-nav-active')) {
					$('body').removeClass('mobile-nav-active');
					$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
				}
				return false;
			}
		}
	});

	// Activate smooth scroll on page load with hash links in the url
	$(document).ready(function () {
		if (window.location.hash) {
			var initial_nav = window.location.hash;
			if ($(initial_nav).length) {
				var scrollto = $(initial_nav).offset().top;
				$('html, body').animate({
					scrollTop: scrollto
				}, 1500, 'easeInOutExpo');
			}
		}
	});

	$(document).ready(function () {

		$("#owl-demo").owlCarousel({

			// autoPlay: 3000, //Set AutoPlay to 3 seconds
			autoplay: true,
			autoplayTimeout: 3000,
			loop: true,
			margin: 10,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1000: {
					items: 3
				}
			},

		});

	});

	$(document).ready(function () {

		$("#recommendations").owlCarousel({

			// autoPlay: 3000, //Set AutoPlay to 3 seconds
			autoplay: true,
			autoplayTimeout: 5000,
			loop: true,
			margin: 10,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1000: {
					items: 2
				}
			},

		});

	});

	$(document).on('click', '.mobile-nav-toggle', function (e) {
		$('body').toggleClass('mobile-nav-active');
		$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
	});

	$(document).click(function (e) {
		var container = $(".mobile-nav-toggle");
		if (!container.is(e.target) && container.has(e.target).length === 0) {
			if ($('body').hasClass('mobile-nav-active')) {
				$('body').removeClass('mobile-nav-active');
				$('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
			}
		}
	});

	// Navigation active state on scroll
	var nav_sections = $('section');
	var main_nav = $('.nav-menu, #mobile-nav');

	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop() + 300;

		nav_sections.each(function () {
			var top = $(this).offset().top,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				if (cur_pos <= bottom) {
					main_nav.find('li').removeClass('active');
				}
				main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
			}
			if (cur_pos < 200) {
				$(".nav-menu ul:first li:first").addClass('active');
			}
		});
	});

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});

	$('.back-to-top').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1500, 'easeInOutExpo');
		return false;
	});

	// Init AOS
	function aos_init() {
		AOS.init({
			duration: 1000,
			once: true
		});
	}

	// Porfolio isotope and filter
	$(window).on('load', function () {
		var portfolioIsotope = $('.portfolio-container').isotope({
			itemSelector: '.portfolio-item'
		});

		$('#portfolio-flters li').on('click', function () {
			$("#portfolio-flters li").removeClass('filter-active');
			$(this).addClass('filter-active');

			portfolioIsotope.isotope({
				filter: $(this).data('filter')
			});
			aos_init();
		});

		// Initiate venobox (lightbox feature used in portofilo)
		$('.venobox').venobox({
			'share': false
		});

		// Initiate aos_init() function
		aos_init();

	});

	setTimeout(() => {
		$('.owl-carousel').owlCarousel({
			loop: true,
			margin: 10,
			autoplay: true,
			autoplayHoverPause: true,
			dots: true,
			dotsEach: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 2
				},
				1000: {
					items: 3
				}
			}
		});
	}, 1000);

})(jQuery);