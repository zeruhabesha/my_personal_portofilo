$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500, 
      'linear'
    );

  });

});





// Function to open the popup
function openPopup(imgSrc) {
  var popup = document.getElementById('popup');
  var popupImg = document.getElementById('popup-img');
  popupImg.src = imgSrc;
  popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
  var popup = document.getElementById('popup');
  popup.style.display = 'none';
}
