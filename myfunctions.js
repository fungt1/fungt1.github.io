   <script>
        $(window).scroll(function() {
            if ($(document).scrollTop() > 50) {
                $('.nav').addClass('affix');
                console.log("OK");
            } else {
                $('.nav').removeClass('affix');
            }
        });

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
});
$(function() {
$(document).on('click','a.page-scroll',function(event){
  var $anchor=$(this);
  $('html,body').stop().animate({
    scrollTop: ($($anchor.attr('href')).offset().top-45)
  },1500,'easeInOutExpo');
  event.preventDefault();
});
});
