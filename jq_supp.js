$(document).ready(function() {
	// NAVIGATION BUTTONS ANIMATION BEGIN
	$(".nav_button").hover(function(){
		var test = $(this).css('margin-left');
		var parsed = parseInt(test);
		var plusMargin = parsed + 10;
		$(this).css("margin-left",plusMargin);
	},function(){
		var test = $(this).css('margin-left');
		var parsed = parseInt(test);
		var minusMargin = parsed - 10;
		$(this).css("margin-left",minusMargin);
	});
	// NAVIGATION BUTTONS ANIMATION END

	// NAVIGATION BUTTONS SELECTION BEGIN
    $(document).on("click","#navigation", function (event) {
        $('#hello_text').hide();
        var selectedID = event.target.id;
        if (selectedID == 'button1') {
            var shown = $('#about_us').attr('style');
            if (shown == undefined) {
                shown = '';
            };
            if (shown.indexOf('none') > 0) {
                $('#about_us').show();
                $('.content_section_cont').addClass("move");
                // $('#wrapper').animate({opacity: 0}, 0).css({'background-image': 'url("drawings.jpg")'}).animate({opacity: 0.8}, 1500);
            } else {
                $('#about_us').fadeOut();
                $('.content_section_cont').removeClass("move");
                // $('#wrapper').animate({opacity: 0.8}, 0).css({'background-image': 'url("drawings.jpg")'}).animate({opacity: 0}, 1000);
            }
        } else if (selectedID == 'button2') {
            var shown = $('#gallery').attr('style');
            if (shown == undefined) {
                shown = '';
            };
            if (shown.indexOf('none') > 0) {
                $('#gallery').show();
                // $('#wrapper').animate({opacity: 1}, 0).css({'background-image': ''});
                $('.content_section_cont').addClass("move");
            } else {
                $('#gallery').fadeOut();
                $('.content_section_cont').removeClass("move");
            }
        } else if (selectedID == 'button5') {
            var shown = $('#graphics').attr('style');
            if (shown == undefined) {
                shown = '';
            };
            if (shown.indexOf('none') > 0) {
                $('#graphics').show();
                // $('#wrapper').animate({opacity: 1}, 0).css({'background-image': ''});
                $('.content_section_cont').addClass("move");
            } else {
                $('#graphics').fadeOut();
                $('.content_section_cont').removeClass("move");
            }
        } else if (selectedID == 'button6') {
            var shown = $('#contact').attr('style');
            if (shown == undefined) {
                shown = '';
            };
            if (shown.indexOf('none') > 0) {
                initialize();
                $('#contact').show();
                // $('#wrapper').animate({opacity: 1}, 0).css({'background-image': ''});
                $('.content_section_cont').addClass("move");
            } else {
                $('#contact').fadeOut();
                $('.content_section_cont').removeClass("move");
            }
        };
    });
    // NAVIGATION BUTTONS SELECTION END

    // NAVIGATION BUTTONS SLIDE ANIMATION BEGIN
    $(document).on("click","#navigation", function (event) {
    	$('#hello_text').hide();        
            // alert("clik!")
	    var selectedID = event.target.id;
	    var shownItems = $("#navigation").children('div[style*="display: none;"]').length;
	    if (shownItems == 0) {
	    	$("#navigation").children('div:not(#'+selectedID+')').delay(10).slideUp();
	    } else {
            // alert("DOLE!")
	    	$('#hello_text').delay(50).slideDown(2000);
	    	$("#navigation").children('div:not(#'+selectedID+')').slideDown();
	    };
	});
	// NAVIGATION BUTTONS SLIDE ANIMATION END

    // CHOOSING GALLERY ITEM BEGIN
    $('#maxima').click(function(){
        $('#slders_wraper').fadeOut('fast');
        $('.accordion').delay(200).fadeIn('slow');
    })
    $('#back_to_slider').click(function(){
        $('.accordion').fadeOut('fast');
        $('#slders_wraper').delay(200).fadeIn('slow');
    })
    // CHOOSING GALLERY ITEM END

    // BACKROUND SLIDE SHOW BEGIN
	$('#backround').cycle({
		fx:'tileSlide',
        timeout: 2000
	});
    // BACKROUND SLIDE SHOW END

    // GALERY SLIDE BEGIN
    $('.pics').cycle({ 
        fx:'scrollHorz',
        tileVertical: false,
        timeout: 1500
    });
    // GALERY SLIDE END

    // HOME PAGE TEXT
    $('#hello_text').delay(50).slideDown(2000);
});
