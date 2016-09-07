$(document).ready(function(){

	$('#contactform').submit(function(){

		var action = $(this).attr('action');

		$("#message").slideUp(500,function() {
		$('#message').hide();

		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			phone: $('#phone').val(),
			comments: $('#comments').val(),
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').slideDown('slow');
				$('#submit').removeAttr('disabled');
				if(data.match('success') != null) $('#contactform').slideUp('slow');

			}
		);

		});

		return false;

	});

});


// ----------------------------------------------------------
// 3.slick

$(document).ready(function(){
    $('.locations-price-slick-left').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: $("#locations-price-nav-left-prev"),
        nextArrow: $("#locations-price-nav-left-next")

    });
    $('.locations-price-slick-right').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: $("#locations-price-nav-right-prev"),
        nextArrow: $("#locations-price-nav-right-next")

    });
});


// ----------------------------------------------------------
// Scroll
$(document).ready(function() {
  function scrollToID(id, speed){
    var offSet = 50;
    var targetOffset = $(id).offset().top - offSet;
    var mainNav = $('#main-nav');
    $('html,body').animate({scrollTop:targetOffset}, speed);
    if (mainNav.hasClass("open")) {
      mainNav.css("height", "1px").removeClass("in").addClass("collapse");
      mainNav.removeClass("open");
    }
  }

  // navigation click actions
  $('.scroll-link').on('click', function(event){
    event.preventDefault();
    var sectionID = $(this).attr("data-id");
    scrollToID('#' + sectionID, 750);
  });
  // scroll to top action
  $('.scroll-top').on('click', function(event) {
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, 'slow');
  });
  // mobile nav toggle
  $('#nav-toggle').on('click', function (event) {
    event.preventDefault();
    $('#main-nav').toggleClass("open");
  });
});