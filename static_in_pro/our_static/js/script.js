jQuery(function( $ ){
	/**
	 * Most jQuery.localScroll's settings, actually belong to jQuery.ScrollTo, check it's demo for an example of each option.
	 * @see http://demos.flesler.com/jquery/scrollTo/
	 * You can use EVERY single setting of jQuery.ScrollTo, in the settings hash you send to jQuery.localScroll.
	 */
	
	// The default axis is 'y', but in this demo, I want to scroll both
	// You can modify any default like this
	//$.localScroll.defaults.axis = 'y';
	
	/**
	 * NOTE: I use $.localScroll instead of $('#navigation').localScroll() so I
	 * also affect the >> and << links. I want every link in the page to scroll.
	 */
	$.localScroll({
		//target: '.canvas', // could be a selector or a jQuery object too.
		//queue:true,
		duration:500
		//hash:true,
	});
});



  var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, 
                        html.scrollHeight  );


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

