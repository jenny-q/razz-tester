function myFunction() {
    document.getElementsByClassName("nav")[0].classList.toggle("responsive");
}

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