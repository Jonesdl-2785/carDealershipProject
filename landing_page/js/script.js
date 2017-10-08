$(document).ready(function() {
	
	// General Focus
	$('.focus').children().hover(function() {
		$(this).stop().fadeTo(300,0.5);
	}, function() {
		$(this).stop().fadeTo(300,1);
	});
	
	// Images Focus
	$('.img-responsive').hover(function() {
		$(this).stop().fadeTo(300,0.5);
	}, function() {
		$(this).stop().fadeTo(300,1);
	});
	
	// Top Tabs
	$( "#tabs" ).tabs();
	
	// Menu Anchors
	$('ul#menu a').smoothScroll();
	
	// Mobile Menu Anchors
	$('ul.dropdown-menu a').smoothScroll();
	
	// Go Top
	$('a#top').smoothScroll();
	
	// WayPoint Discover App
	$("#app_content").waypoint(function() {
	    $('#app_content').addClass('fadeInLeft animated');
	    $('.app_image').addClass('fadeInRight animated');
	}, { offset: '100%'});

});