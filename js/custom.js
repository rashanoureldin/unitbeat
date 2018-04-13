$(document).ready(function() {

	$('#fullpage').fullpage({
		anchors: ['home','leasing', 'financials', 'maintainance' , 'reantal-profile' , 'effective-communication' , 'payments-tracking'],
		menu:'.v-nav',
		slideSelector: '.FPslide',
		verticalCentered: false,
		scrollingSpeed: 1000,
		responsiveWidth: 1100
	});

	$('.Carousel').carousel({
		interval:   4000
	});
	$(function() {
	$('.mobile-menu').fullScreenNav();
    });
});
