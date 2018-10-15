var mySwiper = new Swiper(".swiper-container", {
  direction: "horizontal",
  loop: true,
  pagination: ".swiper-pagination",
  grabCursor: true,
  speed: 1000,
  paginationClickable: true,
  parallax: true,
  autoplay: false,
  effect: "fade",
  mousewheelControl: 0,
});






// PORTFOLIO SLIDER


var $activeSlide = $(".active"),
    $homeSlide = $(".slide"),
    $slideNavPrev = $("#prev"),
    $slideNavNext = $("#next");


function init(){
  TweenMax.set($homeSlide.not($activeSlide), {autoAlpha: 0});
  TweenMax.set($slideNavPrev, {autoAlpha: 1});
}

init();

function goToNextSlide(slideOut, slideIn, slideInAll){
  var tl = new TimelineLite(),
    slideOutContent = slideOut.find('.case__content'),
    slideInContent = slideIn.find('.case__content'),
    slideOutImg = slideOut.find('.case__img'),
    slideInImg = slideIn.find('.case__img'),
    index = slideIn.index(),
    size = $homeSlide.length;
  console.log(index);  
  
  if(slideIn.length !== 0){
 
    tl
      .set(slideIn, {autoAlpha: 1, className: '+=active'})
      .set(slideOut, {className: '-=active'})
      .to(slideOutContent, 0.65, {y: '+=40px', ease:Power3.easeInOut}, 0)
      .to(slideOutImg, 0.65, {backgroundPosition: 'bottom', ease:Power3.easeInOut}, 0)
      .to(slideInAll, 1, {y: '-=100%', ease:Power3.easeInOut}, 0)
      .fromTo(slideInContent, 0.65, {y: '-=40px'}, {y: 0, ease:Power3.easeInOut}, "-=0.7")
      .fromTo(slideInImg, 0.65, {backgroundPosition: 'top'}, {backgroundPosition: 'bottom', ease:Power3.easeInOut}, "-=0.7")
    }
 
    TweenMax.set($slideNavPrev, {autoAlpha: 1});
 
    if(index === size - 1){
      TweenMax.to($slideNavNext, 0.3, {autoAlpha: 1, ease:Linear.easeNone});
    }
};
 
$slideNavNext.click(function (e) {
  e.preventDefault();
  
  var slideOut = $('.slide.active'),
       slideIn = $('.slide.active').next('.slide'),
       slideInAll = $('.slide');

  goToNextSlide(slideOut, slideIn, slideInAll);
});

function goToPreviousSlide(slideOut, slideIn, slideInAll){
  var tl = new TimelineLite(),
    slideOutContent = slideOut.find('.case__content'),
    slideInContent = slideIn.find('.case__content'),
    slideOutImg = slideOut.find('.case__img'),
    slideInImg = slideIn.find('.case__img'),
    index = slideIn.index(),
    size = $homeSlide.length;
  
  if(slideIn.length !== 0){
 
    tl
      .set(slideIn, {autoAlpha: 1, className: '+=active'})
      .set(slideOut, {className: '-=active'})
      .to(slideOutContent, 0.65, {y: '-=40px', ease:Power3.easeInOut}, 0)
      .to(slideOutImg, 0.65, {backgroundPosition: 'top', ease:Power3.easeInOut}, 0)
      .to(slideInAll, 1, {y: '+=100%', ease:Power3.easeInOut}, 0)
      .fromTo(slideInContent, 0.65, {y: '+=40px'}, {y: 0, ease:Power3.easeInOut}, "-=0.7")
      .fromTo(slideInImg, 0.65, {backgroundPosition: 'bottom'}, {backgroundPosition: 'top', ease:Power3.easeInOut}, "-=0.7")
    }
 
    TweenMax.set($slideNavNext, {autoAlpha: 1});
 
    if(index === 0){
      TweenMax.to($slideNavPrev, 0.3, {autoAlpha: 1, ease:Linear.easeNone});
    }
};

$slideNavPrev.click(function (e) {
  e.preventDefault();
  
  var slideOut = $('.slide.active'),
       slideIn = $('.slide.active').prev('.slide'),
       slideInAll = $('.slide');

  goToPreviousSlide(slideOut, slideIn, slideInAll);
});


// TESTIMONIAL


var slides = document.querySelectorAll('#testimonials .testimonial-slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,5000);

function nextSlide() {
    slides[currentSlide].className = 'testimonial-slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'testimonial-slide showing';
}