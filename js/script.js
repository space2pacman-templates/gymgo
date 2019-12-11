$(document).ready(function() {

	$(window).on('scroll', function () {
	    if ($(window).scrollTop() > 15) {
	        $('.header--fake').height($('.js-header').outerHeight());
	        $('.js-header').addClass('header--fixed');
	    } else {
	        $('.header--fake').height(0);
	        $('.js-header').removeClass('header--fixed');
	    }
	});

	$(window).trigger('scroll');

	$(".nav-link").click(function(e) {
	    e.preventDefault();
	    var aid = $(this).attr("href");
	    $('html,body').animate({scrollTop: $(aid).offset().top - $('.js-header').outerHeight()},'slow');
	});

	$(".nav-link-mobile").click(function(e) {
	    e.preventDefault();
	    var aid = $(this).attr("href");
	    $('html,body').animate({scrollTop: $(aid).offset().top - $('.js-header').outerHeight()},'slow');
	});

	$(".hamburger").on("click", function() {
		$(".nav-mobile").slideToggle()
	})

	$(".instructors__block").owlCarousel({
		items: 1,
		margin: 30,
		responsive: {
			780: {
				items: 3
			},
			1170: {
				items: 4
			}
		}
	})

	if ($(window).width() < 780) {
		$(".pricing__block").addClass("owl-carousel")
		$(".pricing__block").owlCarousel({
			items: 1,
			margin: 30
		})
	}

})