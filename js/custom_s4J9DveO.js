/* Panel Top 04 */
$(document).ready(function(){
  $(window).scroll(function(){
    if($(window).scrollTop() > 5){
      $(".panel.top").addClass("black");
    }else{
      $(".panel.top").removeClass("black");
    }
  });
});