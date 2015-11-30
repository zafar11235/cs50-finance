jQuery(function( $ ){

	$.localScroll({
		duration:500
	});
});



 $(document).ready(function() {
	function setHeight() {
		windowHeight = $(window).innerHeight();
		$('.main-jumbotron').css('min-height', windowHeight);
		};
		setHeight();

		$(window).resize(function() {
		setHeight();
		});

		function setArrowHeight() {
		jumboHeight = $('.main-jumbotron').innerHeight();
		$('.arrow').css('top', jumboHeight-50);
		};
		setArrowHeight();

		$(window).resize(function() {
		setArrowHeight();
		});

});


$(document).ready(function() {
	
	var defaults = {
		containerID: 'toTop', // fading element id
		containerHoverID: 'toTopHover', // fading element hover id
		scrollSpeed: 12000,
		easingType: 'linear' 
		};
	
	
	$().UItoTop({ easingType: 'easeOutQuart' });
	
});       
$(document).ready(function() {
    var navoffeset = $(".navigation").offset().top;
    $(window).scroll(function() {
        var scrollpos = $(window).scrollTop();
        //var scrollpos= $(window).innerHeight();
        if (scrollpos >= navoffeset) {
            $(".navigation").addClass("fixed");

        } else {
            $(".navigation").removeClass("fixed");
        }
    });

});





               

            