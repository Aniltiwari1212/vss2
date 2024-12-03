/* Set the width of the side navigation to 250px */
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
  }

  $(document).ready(function() {
    var owl = $('.owl-carousel');
    $('.logoSlider').owlCarousel({
      loop:true,
      autoplay:true,
      margin:15,
      nav:true,
      dots:false,
      responsive:{
  
        0:{
  
          items:1
        },
        768:{
  
          items:3
        },
        1024:{
  
          items:4,
          margin:50
        }
      }
    });
    
  });