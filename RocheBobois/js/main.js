/*===== EXPANDER MENU/NAVBAR  =====*/ 

//Select Element Funciton
const selectElement = function (element) {
  return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function () {
  body.classList.toggle('open');
});

/*============Wishlist Btn Transition==============*/

$(window).scroll(function () {
  if ($(window).scrollTop() >= 50) {
  $('.fixed-wishlist-button').css('background','#1d1d1d');
  } else {
  $('.fixed-wishlist-button').css('background','transparent');
  }
  });

/*============SLIDER==============*/

$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});

$(document).ready(function() {
  $('#adaptive').lightSlider({
      adaptiveHeight:true,
      item:1,
      slideMargin:0,
      loop:true
  });
});

$(document).ready(function() {
  $('#imageGallery').lightSlider({
      gallery:true,
      item:1,
      loop:true,
      thumbItem:4,
      slideMargin:0,
      enableDrag: false,
      currentPagerPosition:'left',
      onSliderLoad: function(el) {
          el.lightGallery({
              selector: '#imageGallery .lslide'
          });
      }   
  });  
});
  

  /*============LOAD MORE============*/

  $(".p-item").slice(0,9).show()

  $(".load-more").on("click", function(){
    $(".p-item:hidden").slice(0,3).show()

    if($(".p-item:hidden").length ==0)
    {
      $(".load-more").fadeOut();
    }
  })