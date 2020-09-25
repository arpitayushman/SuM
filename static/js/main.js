(function($) {
	$(document).ready(function() {
		"use strict";



		$(".project-box").hover(function () {
        // change hovered div background to yellow:
         $(".works").css("background-color", $(this).data('bg'));
        // loop through the rest of the divs with the same class:
        $(".works").not(this).each(function(){
            // change their background color according to their 'data-color' attribute:
            $(this).css("background-color", $(this).data('bg'));
        });
       // set hover out method:
    }, function(){
        // change each 'box' background color to default:
        $(".works").css("background-color", '');
    });




		// TYPEWRITER
			$("#typewriter").typewriter({
				prefix : "",
				text : ["Please wait", "Still loading", "Almost done"],
				typeDelay : 100,
				waitingTime : 1500,
				blinkSpeed : 800
			});


		// SLIDER
			var swiper = new Swiper('.swiper-slider', {
			speed: 600,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function (index, className) {
				  return '<span class="' + className + '">0' + (index + 1) + '</span>';
				},
			},
			});

			// Clients carousel (uses the Owl Carousel library)
$(".clients-carousel").owlCarousel({
	autoplay: true,
	dots: true,
	loop: true,
	responsive: {
		0: {
			items: 2
		},
		768: {
			items: 4
		},
		900: {
			items: 6
		}
	}
});




		// EQUALIZER TOGGLE
			var source = "audio/audio.mp3";
			var audio = new Audio(); // use the constructor in JavaScript, just easier that way
			audio.addEventListener("load", function() {
			  audio.play();
			}, true);
			audio.src = source;
			audio.autoplay = true;
			audio.loop = true;
			audio.volume = 0.2;


			$('.equalizer').click();
			var playing = true;
			$('.equalizer').on('click', function(e) {
				if (playing == false) {
			  audio.play();
					playing = true;

				} else {
					audio.pause();
					playing = false;
				}
			});


		// EQUALIZER
				function randomBetween(range) {
					var min = range[0],
						max = range[1];
					if (min < 0) {
						return min + Math.random() * (Math.abs(min)+max);
					}else {
						return min + Math.random() * max;
					}
				}

				$.fn.equalizerAnimation = function(speed, barsHeight){
					var $equalizer = $(this);
					setInterval(function(){
						$equalizer.find('span').each(function(i){
						  $(this).css({ height:randomBetween(barsHeight[i])+'px' });
						});
					},speed);
					$equalizer.on('click', function(e) {
						$equalizer.toggleClass('paused');
					});
				}

				var barsHeight = [
				  [8, 22],
				  [5, 10],
				  [11, 8],
				  [1, 27],
				  [9, 1],
				  [16, 3]
				];
				$('.equalizer').equalizerAnimation(250, barsHeight);

		// HAMBURGER AUDIO
			document.getElementById("hamburger-menu").addEventListener('click', function(e) {
			document.getElementById("hamburger-hover").play();
	  	});





		// DATA BACKGROUND IMAGE
			var pageSection = $(".bg-image");
			pageSection.each(function(indx){
				if ($(this).attr("data-background")){
					$(this).css("background-image", "url(" + $(this).data("background") + ")");
				}
			});



		// HAMBURGER MENU
		$('.hamburger').on('click', function(e) {
			if ($(".navigation-menu").hasClass("active")) {
				$(".hamburger").toggleClass("open");
				$("body").toggleClass("overflow");
				$(".navigation-menu").removeClass("active");
				$(".navigation-menu .inner .menu").css("transition-delay", "0s");
				$(".navigation-menu .inner blockquote").css("transition-delay", "0s");
				$(".navigation-menu .bg-layers span").css("transition-delay", "0.3s");
			} else
			{
				$(".navigation-menu").addClass('active');
				$(".hamburger").toggleClass("open");
				$("body").toggleClass("overflow");
				$(".navigation-menu.active .inner .menu").css("transition-delay", "0.45s");
				$(".navigation-menu.active .inner blockquote").css("transition-delay", "0.50s");
				$(".navigation-menu .bg-layers span").css("transition-delay", "0s");
			}
			$(this).toggleClass("active");
		});



		// PAGE TRANSITION
		$('body a').on('click', function(e) {

			// if (typeof $( this ).data('fancybox') == 'undefined') {
			// e.preventDefault();
			// var url = this.getAttribute("href");
			// if( url.indexOf('#') != -1 ) {
			// var hash = url.substring(url.indexOf('#'));

			// if( $('body ' + hash ).length != 0 ){
			// $('.transition-overlay').removeClass("active");
			// $(".hamburger").toggleClass("open");
			// $("body").toggleClass("overflow");
			// $(".navigation-menu").removeClass("active");
			// $(".navigation-menu .inner ul").css("transition-delay", "0s");
			// $(".navigation-menu .inner blockquote").css("transition-delay", "0s");
			// $(".navigation-menu .bg-layers span").css("transition-delay", "0.3s");

			// $('html, body').animate({
			// scrollTop: $(hash).offset().top
			// }, 1000);

			// }
			// }
			// else {
			// $('.transition-overlay').toggleClass("active");
			// setTimeout(function(){
			// window.location = url;
			// },1000);

			// }
			// }
			});


		// PAGE HEADER FADE
			var divs = $('header');
			$(window).on('scroll', function() {
				var st = $(this).scrollTop();
				divs.css({ 'opacity' : (1 - st/700) });
				divs.css({ 'transition-delay' : ("0s") });
				divs.css({ 'transition' : ("0.05s ease-in-out") });
			});




		});
	// END JQUERY




		// WOW ANIMATION
			wow = new WOW(
				{
					animateClass: 'animated',
					offset:       0
				}
				);
			wow.init();


		// PRELOADER
			$(window).load(function(){
				$("body").addClass("page-loaded");
			});

		// COUNTER
			 $(document).scroll(function(){
				$('.odometer').each( function () {
					var parent_section_postion = $(this).closest('section').position();
					var parent_section_top = parent_section_postion.top;
					if ($(document).scrollTop() > parent_section_top - 300) {
						if ($(this).data('status') == 'yes') {
							$(this).html( $(this).data('count') );
							$(this).data('status', 'no')
						}
					}
				});
			});



})(jQuery);

$(document).ready(function(){
  $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });

    $(".zoom").hover(function(){

		$(this).addClass('transition');
	}, function(){

		$(this).removeClass('transition');
	});
});



(function ($) {
	$.fn.countTo = function (options) {
		options = options || {};
		
		return $(this).each(function () {
			// set options for current element
			var settings = $.extend({}, $.fn.countTo.defaults, {
				from:            $(this).data('from'),
				to:              $(this).data('to'),
				speed:           $(this).data('speed'),
				refreshInterval: $(this).data('refresh-interval'),
				decimals:        $(this).data('decimals')
			}, options);
			
			// how many times to update the value, and how much to increment the value on each update
			var loops = Math.ceil(settings.speed / settings.refreshInterval),
				increment = (settings.to - settings.from) / loops;
			
			// references & variables that will change with each update
			var self = this,
				$self = $(this),
				loopCount = 0,
				value = settings.from,
				data = $self.data('countTo') || {};
			
			$self.data('countTo', data);
			
			// if an existing interval can be found, clear it first
			if (data.interval) {
				clearInterval(data.interval);
			}
			data.interval = setInterval(updateTimer, settings.refreshInterval);
			
			// initialize the element with the starting value
			render(value);
			
			function updateTimer() {
				value += increment;
				loopCount++;
				
				render(value);
				
				if (typeof(settings.onUpdate) == 'function') {
					settings.onUpdate.call(self, value);
				}
				
				if (loopCount >= loops) {
					// remove the interval
					$self.removeData('countTo');
					clearInterval(data.interval);
					value = settings.to;
					
					if (typeof(settings.onComplete) == 'function') {
						settings.onComplete.call(self, value);
					}
				}
			}
			
			function render(value) {
				var formattedValue = settings.formatter.call(self, value, settings);
				$self.html(formattedValue);
			}
		});
	};
	
	$.fn.countTo.defaults = {
		from: 0,               // the number the element should start at
		to: 0,                 // the number the element should end at
		speed: 1000,           // how long it should take to count between the target numbers
		refreshInterval: 100,  // how often the element should be updated
		decimals: 0,           // the number of decimal places to show
		formatter: formatter,  // handler for formatting the value before rendering
		onUpdate: null,        // callback method for every time the element is updated
		onComplete: null       // callback method for when the element finishes updating
	};
	
	function formatter(value, settings) {
		return value.toFixed(settings.decimals);
	}
}(jQuery));

jQuery(function ($) {
  // custom formatting example
  $('.count-number').data('countToOptions', {
	formatter: function (value, options) {
	  return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
	}
  });
  
  // start all the timers
  $('.timer').each(count);  
  
  function count(options) {
	var $this = $(this);
	options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	$this.countTo(options);
  }
});
