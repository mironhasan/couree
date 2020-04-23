

//for menu fixed when scrolling
$(window).on("scroll", function(){
    var scrolling = $(this).scrollTop();
    if (scrolling > 130){
        $(".header-cover").addClass("menu-fixed");
    }else{
        $(".header-cover").removeClass("menu-fixed");
    }
});







//for similar part
$('.testi-parent').slick({
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: false,
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-chevron-right dandik"></i>',
  nextArrow: '<i class="fas fa-chevron-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});









