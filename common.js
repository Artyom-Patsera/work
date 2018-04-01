$(document).ready(function() {

	var activeF = $('.btn-search-active')
	activeF.click(function() {
		var form = $('.wrap-form-top')
		form.addClass('active-form-top')
	});

	var closeF = $('.close')
	closeF.click(function() {
		var form = $('.wrap-form-top')
		form.removeClass('active-form-top')
	});

	var $activeH = $('.menu a') 
	$activeH.click(function() {
		$activeH.removeClass('active-top-menu')
		$(this).toggleClass('active-top-menu')
	});

	$('.menu-trigger').click(function() {
    	$('.nav ul').slideToggle(400, function() {
           if($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        }); 
    
  });

	$('.bg-slide').slick({
  		infinite: true,
  		slidesToShow: 2,
  		slidesToScroll: 2,
  		autoplay: true,
  		autoplaySpeed: 2000,
  		dots: false,
  		arrow: false,
  		pauseOnHover: false,

  		// slidesToScroll: true,
	});

	$('.slide-content').slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 4000,
  		dots: true,
  		arrow: false,
  		dotsClass: "my-dots",

  		// slidesToScroll: true,
	});

	$('.slide-services').slick({
  		infinite: true,
  		slidesToShow: 6,
  		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 4000,
  		dots: false,
  		arrow: true,
  		centerMode: true,
  		focusOnSelect: true,
  		prevArrow: '<button type="button" class="prev arrow"><i class="fas fa-chevron-left fa-6x"></i></button>',
    	nextArrow: '<button type="button" class="next arrow"><i class="fas fa-chevron-right fa-6x"></i></button>',
    	responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
  
      }
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]

  		// slidesToScroll: true,
	});

	$('.brand-slide').slick({
  		infinite: true,
  		slidesToShow: 6,
  		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 4000,
  		dots: false,
  		arrow: true,
  		centerMode: false,
  		focusOnSelect: false,
  		prevArrow: '<button type="button" class="prev arrow"><i class="fas fa-chevron-left fa-1x"></i></button>',
    	nextArrow: '<button type="button" class="next arrow"><i class="fas fa-chevron-right fa-1x"></i></button>',
    	responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
  
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    
  ]

  		// slidesToScroll: true,
	});

	$('.accordion-head').click(function () {
			$(this).next().slideToggle();
			$('.head').not(this).next().slideUp();
			
		});


	$('.toggle-head').click(function () {
			$(this).next().slideToggle();
			
		});


	var visTab = $('.tab-panel a');
	visTab.click(function() {
		var id = '#panel'+$(this).attr('for-data');
		$(".tab-text").removeClass('active-tab'),
		$(id).addClass('active-tab');
			
	
	});


});
