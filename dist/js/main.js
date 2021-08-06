/*  ---------------------------------------------------
    Author: Josh
    Author URI: https://twitter.com/HodJosias
---------------------------------------------------------  */

(function ($) {

    // $(document).ready(function() {
    //     /* Basic Init*/
    //     if ($(document).scrollTop() > 2) {
    //         $("header").addClass('bg-secondary shadow-lg');
    //     }
    // });
    
    /*------------------
        Preloader
    --------------------*/
    // $(window).on('load', function () {
    //     $(".loader").delay(2000).fadeOut();
    //     $("#preloader").delay(2000).fadeOut("slow");
    // });

    new WOW().init();

    /*Feather Icon*/
	var featherIcon = $('.feather-icon');
	if( featherIcon.length > 0 ){
		feather.replace();
	}

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        speedAsDuration: true,
    });

})(jQuery);
