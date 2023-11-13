$(function(){
  $('.carousel-item').eq(0).addClass('active');
  var total = $('.carousel-item').length;
  var current = 0;

  // Add animation to fade in the carousel
  $('.carousel').hide().fadeIn(1000);

  $('#moveRight').on('click', function () {
    var prev = current;
    current = current + 1;
    setSlide(prev, current);
    changeInfoColor(); // Call the function to change the info color
  });

  $('#moveLeft').on('click', function(){
    var prev = current;
    current = current - 1;
    setSlide(prev, current);
    changeInfoColor(); // Call the function to change the info color
  });

  function setSlide(prev, next){
    var slide = current;

    if(next > total-1){
      slide = 0;
      current = 0;
    }

    if(next < 0){
      slide = total - 1;
      current = total - 1;
    }

    $('.carousel-item').eq(prev).removeClass('active');
    $('.carousel-item').eq(slide).addClass('active');

    setTimeout(function(){
      // Additional code to run after the slide transition
    }, 1000); // Adjust the duration (in milliseconds) as needed

    console.log('current ' + current);
    console.log('prev ' + prev);
  }

  function changeInfoColor() {
    // Generate a random pastel color
    var randomPastelColor = generateRandomPastelColor();

    // Apply the random pastel color to the carousel-item__info background
    $('.carousel-item.active .carousel-item__info').css('background-color', randomPastelColor);
  }

  function generateRandomPastelColor() {
    // Generate pastel colors by blending white with a random hue
    var hue = Math.floor(Math.random() * 360);
    var pastelColor = 'hsl(' + hue + ', 70%, 80%)';

    return pastelColor;
  }
});

window.addEventListener('load', function() {
  // This code will run when the page and all resources have finished loading.
  document.querySelector('.loading-screen').style.display = 'none';
});

$(document).ready(function() {
    // Add rounded corners to the carousel container
    $('.carousel').css('border-radius', '30px'); // Adjust the radius as needed
  });
