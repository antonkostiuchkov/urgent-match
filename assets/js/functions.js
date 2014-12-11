$(function() {

  smoothScroll(300);


  $('.nav-toggle').on('click', function () {
    $('.main-navigation').toggleClass('open');
  });


});

function smoothScroll (duration) {
  $('a[href^="#"]').on('click', function(event){

    var target = $( $(this).attr('href') );

    if ( target.length ) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, duration);
    }
  });
  }
