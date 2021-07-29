/*===== EXPANDER MENU/NAVBAR  =====*/ 

const selectElement = function (element) {
    return document.querySelector(element);
  };
  
  let menuToggler = selectElement('.menu-toggle');
  let body = selectElement('body');
  
  menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
  });


/*===== Type Animation=====*/ 

const TypeWriter = function(txtElement, words, wait = 3000){
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
}

// Type Method
TypeWriter.prototype.type = function() {
  //Current index of word
  const current =  this.wordIndex % this.words.length;
  //Get full text of current word
  const fullTxt = this.words[current];

  //Check if deleting
  if(this.isDeleting){
    //Remove char
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    //Add Char
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  //Insert txt into element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`

  //Type Speed
  let typeSpeed = 150;

  if(this.isDeleting) {
    typeSpeed /= 2;
  }

  //If word is complete
  if(!this.isDeleting && this.txt === fullTxt) {
    //Make pause at end 
    typeSpeed = this.wait;
    //set delete to true
    this.isDeleting = true;
  } else if(this.isDeleting && this.txt === ''){
    this.isDeleting = false;
    //Move to next word
    this.wordIndex++;
    //Pause before start typing
    typespeed = 500;
  }


  setTimeout(() => this.type(), typeSpeed)
}

// Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}


/*===== BACK TO TOP =====*/ 

const scrollToTopButton = document.getElementById('js-top');

const scrollFunc = () => {
  let y = window.scrollY;

  if (y > 0) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
   
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 40);
  }
};

scrollToTopButton.onclick = function(e) {
  e.preventDefault();
  scrollToTop();
}

/*===== MODAL IMG =====*/ 

var modal = document.getElementById('myModal');

var images = document.querySelectorAll(".img-thumbnail");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for(let i = 0; i < images.length; i++){
  images[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
} 

/*===== LIGHT SLIDER =====*/ 

$(document).ready(function() {
  $('#imageGallery').lightSlider({
      gallery:true,
      item:1,
      loop:true,
      thumbItem:9,
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

$(document).ready(function() {
  $('#imageGallery2').lightSlider({
      gallery:true,
      item:1,
      loop:true,
      thumbItem:9,
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

$(document).ready(function() {
  $('#imageGallery3').lightSlider({
      gallery:true,
      item:1,
      loop:true,
      thumbItem:9,
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

$(document).ready(function() {
  $('#imageGallery4').lightSlider({
      gallery:true,
      item:1,
      loop:true,
      thumbItem:9,
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

$(document).ready(function() {
  $('#imageGallery5').lightSlider({
      gallery:true,
      item:1,
      loop:true,
      thumbItem:9,
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

$(document).ready(function() {
  $('#imageGallery6').lightSlider({
      gallery:true,
      item:1,
      loop:true,
      thumbItem:9,
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

$(document).ready(function() {
  $('#imageGallery7').lightSlider({
      gallery:true,
      item:1,
      loop:true,
      thumbItem:9,
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


/*===== BEFORE/AFTER SLIDER =====*/ 

$(window).load(function() {
  $("#slide-container").twentytwenty();
});

/*===== LAZY LODING =====*/ 
var lazyLoadInstance = new LazyLoad({
  // Your custom settings go here
});