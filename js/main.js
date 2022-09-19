$(document).ready(function(){
   $('.header__burger').click(function(event){
      $('.header__burger,.header__menu').toggleClass('active')
      $('body').toggleClass('lock')
   })
})

$(document).ready(function(){
   $('.header__burger').click(function(event){
      $('.content').toggleClass('blur')
   })
})

$(document).ready(function(){
   $('.accordion__title').click(function(event){
      if($('.accordion').hasClass('one')){
         $('.accordion__title').not($(this)).removeClass('active');
         $('.accordion__content').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });
});


var minOffset = 290;
  window.onscroll = function() { 
    let has_class = document.body.classList.contains("is_scrolled");
 
    if (minOffset < document.documentElement.scrollTop ) {
      if (!has_class) {
          document.body.classList.add("is_scrolled");
      } 
    } else if (has_class) {
      document.body.classList.remove("is_scrolled")
 
    } 
  }
