/* Panel Top 05 */
$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 5){
      $(".panel.top").addClass("black");
    }else{
      $(".panel.top").removeClass("black");
    }
  });
});

/* Slide 167 (#4) */

$(function(){
  var slideKey = 167;
  if(!window.swipers){window.swipers = {};}
  if(!window.swipers[slideKey]){window.swipers[slideKey] = [];}
  $('.swiper-'+slideKey).each(function(){
    var thisKey = window.swipers[slideKey].length;
    window.swipers[slideKey][thisKey] = 
      new Swiper(this, {
      slidesPerView: 1, 
      //spaceBetween: 20, 
      navigation: {
        nextEl: '.swiper-167-next',
        prevEl: '.swiper-167-prev', 
      },
      breakpoints: {
        767: {
          slidesPerView: 2,   
        },      
        991: {
          slidesPerView: 3,   
        },              
      }    
    });
  });
  $(document).ready(function(){
    $(".box-167").hover(function(){
      var height = $(this).outerHeight();
      var textHeight = $(this).find(".text-167").outerHeight(true);
      $(this).find(".text-167").css("top",((height-textHeight)+"px"));
    },function(){
      $(this).find(".text-167").css("top","313px");
    });
  });
});

/* Slide 175 (#5) */

$(function(){
  var slideKey = 175;
  if(!window.swipers){window.swipers = {};}
  if(!window.swipers[slideKey]){window.swipers[slideKey] = [];}
  $('.swiper-'+slideKey).each(function(){
    var thisKey = window.swipers[slideKey].length;
    window.swipers[slideKey][thisKey] = 
      new Swiper(this, {
      slidesPerView: 1, 
      spaceBetween: 20, 
      navigation: {
        nextEl: '.swiper-175-next',
        prevEl: '.swiper-175-prev', 
      },
      breakpoints: {
        767: {
          slidesPerView: 2,   
        },             
      }  
    });
  });
});