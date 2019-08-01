$(document).ready(function(){
    $('.header-slider-inner').slick({
     nextArrow: '<button type="button" class="slick-next header-next"></button>',
     prevArrow: '<button type="button" class="slick-prev header-prev"></button>',
     infinite: false
    });
    $('.news-inner').slick({
      nextArrow: '<button type="button" class="slick-next news-next"></button>',
      prevArrow: '<button type="button" class="slick-prev news-prev"></button>',
      infinite: false,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 1160,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
      ]
     });

     $('#burger').on('click',function(){
      $('.header-main-nav').toggleClass('header-main-nav_active');
      }); 
  });