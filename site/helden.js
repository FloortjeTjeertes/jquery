$(document).ready(function() {
  //test
  // $('main').hide(3000).delay(1000).show(500);

  //muis events
  $('figure img').mouseenter(function() {
    $(this).fadeTo(600, .01);
  }).mouseleave(function() {
    $(this).fadeTo(1000, 1);
  }).click(function() {
    $(this).next().toggle(700);
  })
  // footer

  $('footer').click(function() {
    $(this).animate({
      top: '-=50px',
      opacity: '-=.2'
    }, 900)
  }).dblclick(function() {
    $(this).animate({
      top: '0',
      opacity: '1'
    }, 900)
  });
});
//plugin (waarom dit een plugin is geen idee)
$(document).ready(function() {

		var id = '#dialog';

		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();

		//Set heigth and width to mask to fill up the whole screen
		$('#mask').css({'width':maskWidth,'height':maskHeight});

		//transition effect
		$('#mask').fadeIn(500);
		$('#mask').fadeTo("slow",0.9);

		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();

		//Set the popup window to center
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);

		//transition effect
		$(id).fadeIn(2000);

	//if close button is clicked
	$('.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();

		$('#mask').hide();
		$('.window').hide();
	});

	//if mask is clicked
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});

});
