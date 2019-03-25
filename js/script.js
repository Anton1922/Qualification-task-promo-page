$(document).ready(function(){

  $('form__button').click(function() {
    $('.form__text, .form__link').show();
  });

});

$(document).ready(function(){

  $('.navigation__link').click(function() {
    $('.navigation__link').removeClass('active');
    $(this).addClass('active');
  });

});
