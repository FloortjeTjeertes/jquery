$(document).ready( function(){
//test
// $('main').hide(3000).delay(1000).show(500);

//muis events
$('figure img').mouseenter( function(){
$(this).fadeTo(600, .01);
}).mouseleave(function() {
  $(this).fadeTo(1000, 1);
}).click( function(){
  $(this).next().toggle(700);
})
// footer

$('footer').click( function(){
  $(this).animate({
    top: '-=50px',
    opacity: '-=0.2'
  }, 900)
}).dbclick ( function(){
  $(this).animate({
    top: '0',
    opacity: '1'
  },900)
});
});
