//carousel function
$(document).ready(function(){
  $('.lux-hero').slick({
  infinite: true,
  speed: 500,
  fade: true,
   nextArrow: '<img src="img/icon-left.png" class="left-arrow">',
  prevArrow: '<img src="img/icon-right.png" class="right-arrow">',
  });
});

//slide out menu
$('a').on('click',function() {
    if($('#menu').css('left')=='0px'){
        $('#menu').animate({left: '-400px'}, 500);        
    }else{
        $('#menu').animate({left:0}, 500); 
    }
});

//retina ready @2x 
$(document).ready(function(){
    if (window.devicePixelRatio > 1) {
        var lowresImages = $('img')

        images.each(function(i) {
            var lowres = $(this).attr('src');
            var highres = lowres.replace(".", "@2x.");
            $(this).attr('src', highres);
        });
    }
});