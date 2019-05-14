// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: false
});
      
  var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination',
    paginationClickable: true,
    autoplay: 7000,
    autoplayDisableOnInteraction: false
  }); 

 /*---------------------
 index page
--------------------- */ 
myApp.onPageInit('home', function (page) {
    var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination',
    paginationClickable: true,
    autoplay: 7000,
    autoplayDisableOnInteraction: false
  });

        var mySwiper = myApp.swiper('.testimonial-item', {
        paginationHide: false,      
        paginationClickable: true
    }); 

$(".click-pages-menu").on('click',function(){

  $(".pages-menu-show").slidToggle();

});

});
 /*---------------------
    portfolio  page
--------------------- */ 
myApp.onPageInit('portfolio', function (page) {

    //Portfolio//
$(".tabe-1").on('click', function() {
    $(".tab2").hide();
    $(".tab3").hide();
    $(".tab1").show(); 
    $(this).addClass('bgefect');
    $(".tabe-2").removeClass('bgefect');  
    $(".tabe-3").removeClass('bgefect');  
});    //Portfolio//
$(".tabe-2").on('click', function() {
    $(".tab2").show();
    $(".tab3").hide();
    $(".tab1").hide();
    $(".tabe-1").removeClass('bgefect');
    $(".tabe-3").removeClass('bgefect');
    $(this).addClass('bgefect');
    
});   //Portfolio//
$(".tabe-3").on('click', function() {
    $(".tab2").hide();
    $(".tab3").show();
    $(".tab1").hide();
     $(".tabe-1").removeClass('bgefect');
     $(".tabe-2").removeClass('bgefect');
    $(this).addClass('bgefect');    
});
});
 /*---------------------
 image-gallery
--------------------- */  
myApp.onPageInit('image-gallery', function (page) {

$('.galleryimg' ).swipebox();

});
 /*---------------------
 blog-page
--------------------- */  
myApp.onPageInit('blog-page', function (page) {

$(".show-blog").on('click', function() {
    $(".show-more").show(1000);
    $(".feature-load").show(1000);
    $(".popular-load").show(1000);
    $(".show-more-feature").hide(1000);
    $(".show-more-popular").hide(1000);
    $(this).hide(1000);
 
});   
$(".feature-load").on('click', function() {
    $(".show-more-feature").show(1000);
    $(".show-more-popular").hide(1000);
    $(".show-more").hide(1000);
    $(".show-blog").show(1000);
    $(".popular-load").show(1000);
    $(this).hide(1000);
 
});   
$(".popular-load").on('click', function() {
    $(".show-more-popular").show(1000);
    $(".show-more-feature").hide(1000);
    $(".show-more").hide(1000);
    $(".feature-load").show(1000);
    $(".show-blog").show(1000);
    $(this).hide(1000);
 
});

});
 /*---------------------
 video-gallery
--------------------- */  
myApp.onPageInit('video-page', function (page) {

$(".click-video").on('click', function() {
    $(".show-video").show(1000);
    $(this).hide(1000);
 
});   
});
 /*---------------------
 product details-page
--------------------- */  
myApp.onPageInit('product-details', function (page) {
    var mySwiper = myApp.swiper('.product-details-slide', {
      pagination: '.swiper-pagination',
      paginationHide: false,
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
    });
 
});
 /*---------------------
 checkout page
--------------------- */  
myApp.onPageInit('checkout-page', function (page) {

$$('.show-shipping').on('click', function () {
    myApp.showTab('#shipping');
});
$$('.show-payment').on('click', function () {
    myApp.showTab('#payment');
}); 
 
});

 /*---------------------
 live chat page
--------------------- */  
myApp.onPageInit('live-chat-page', function (page) {
var conversationStarted = false;
 
// Init Messages
var myMessages = myApp.messages('.messages', {
  autoLayout:true
});
 
// Init Messagebar
var myMessagebar = myApp.messagebar('.messagebar');
 
// Handle message
$$('.messagebar .link').on('click', function () {
  // Message text
  var messageText = myMessagebar.value().trim();
  // Exit if empy message
  if (messageText.length === 0) return;
 
  // Empty messagebar
  myMessagebar.clear()
 
  // Random message type
  var messageType = (['sent', 'received'])[Math.round(Math.random())];
 
  // Avatar and name for received message
  var avatar, name;
  if(messageType === 'received') {
    avatar = 'http://lorempixel.com/output/people-q-c-100-100-9.jpg';
    name = 'Madhusudan';
  }
  // Add message
  myMessages.addMessage({
    // Message text
    text: messageText,
    // Random message type
    type: messageType,
    // Avatar and name:
    avatar: avatar,
    name: name,
    // Day
    day: !conversationStarted ? 'Today' : false,
    time: !conversationStarted ? (new Date()).getHours() + ':' + (new Date()).getMinutes() : false
  })
 
  // Update conversation flag
  conversationStarted = true;
});                
 
});


(function ($) {
 "use strict";
    
$(function(){

$(".click-pages-menu").on('click',function(){
  $(".pages-menu-show").slideToggle();
});

$(".click-shop-menu").on('click',function(){

  $(".shop-menu-show").slideToggle();

});

});
    
    
})(jQuery);    

  