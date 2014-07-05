$(window).bind('scroll',function(e) {
			parallaxScroll();
		});


function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#banner-pic').css('top',(0-(scrolled*.25))+'px');
	$('#join-us-button').css('top',(200-(scrolled*.25))+'px');
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
}

$(document).ready(function() {
	$('a.to-intro').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#what-is-sicun').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
});

$(document).ready(function() {
	$('a.to-group').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#group-division').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
});

$(document).ready(function() {
	$('a.to-learn').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#what-to-learn').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
});

$(document).ready(function() {
	$('a.to-found').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#more-to-be-found').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
});

$(document).ready(function() {
	$('a.to-top').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#banner-pic').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
});

