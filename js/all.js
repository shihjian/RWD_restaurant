
/* swiper 輪播 */
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

/*選單開合*/  
    $('.toggle').on('click', function(e) {
      $(this).toggleClass("open");
        e.preventDefault();
      $('body').toggleClass('menu-show');
    });
  
  
    $('.addlove').hover(function(){
      $(this).find('i').attr('class','fa fa-heart');
      },function(){
      $(this).find('i').attr('class','fa fa-heart-o');
    });


/*連結滑動*/
    $(".Toconnection").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".connection").offset().top
   		}, 1000);
	});
	$(".Tocharacteristic").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".characteristic").offset().top
   		}, 1000);
	});