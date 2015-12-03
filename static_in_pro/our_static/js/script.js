// to Top Link
$(document).ready(function() {
	
	var defaults = {
		containerID: 'toTop', // fading element id
		containerHoverID: 'toTopHover', // fading element hover id
		scrollSpeed: 12000,
		easingType: 'linear' 
		};
	
	
	$().UItoTop({ easingType: 'easeOutQuart' });
	
});


// Local Scroll slow movement
jQuery(function( $ ){
	$.localScroll({
		duration:500,
	});
});




               

            