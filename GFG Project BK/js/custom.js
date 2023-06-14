(function($) {
    "use strict";
	
	/* ..............................................
	Loader 
    ................................................. */
	
	$(window).on('load', function() { 
		$('.preloader').fadeOut(); 
		$('#preloader').delay(550).fadeOut('slow'); 
		$('body').delay(450).css({'overflow':'visible'});
	});
    	
	/* ..............................................
    Navbar Bar
    ................................................. */
	
	$('.navbar-nav .nav-link').on('click', function() {
		var toggle = $('.navbar-toggler').is(':visible');
		if (toggle) {
			$('.navbar-collapse').collapse('hide');
		}
	});
	
	/* ..............................................
    Fixed Menu
    
    $(window).on('scroll', function () {
		if ($(window).scrollTop() > 50) {
			$('.top-header').addClass('fixed-menu');
		} else {
			$('.top-header').removeClass('fixed-menu');
		}
	});

    ................................................. */

	/* ..............................................
    Properties Filter
    ................................................. */
	var Container = $('.container');
	Container.imagesLoaded(function () {
		var portfolio = $('.properties-menu');
		portfolio.on('click', 'button', function () {
			$(this).addClass('active').siblings().removeClass('active');
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({
				filter: filterValue
			});
		});
		var $grid = $('.properties-list').isotope({
			itemSelector: '.properties-grid'
		});

	});

	/* ..............................................
    Gallery
    ................................................. */
	
	$(document).ready(function() {
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
				}
			}
		});
	});
	
	/* ..............................................
    Scroll To Top
    ................................................. */
	
	$(document).ready(function () {

		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#scroll-to-top').fadeIn();
			} else {
				$('#scroll-to-top').fadeOut();
			}
		});

		$('#scroll-to-top').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 600);
			return false;
		});

	});

	
}(jQuery));

 /* ..............................................
    google_map js
    ................................................. */

// This example adds a marker to indicate the position of Bondi Beach in Sydney,
      // Australia.
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: {lat: 40.645037, lng: -73.880224},
		  styles: [
               {
                 elementType: 'geometry',
                 stylers: [{color: '#fefefe'}]
               },
               {
                 elementType: 'labels.icon',
                 stylers: [{visibility: 'off'}]
               },
               {
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#616161'}]
               },
               {
                 elementType: 'labels.text.stroke',
                 stylers: [{color: '#f5f5f5'}]
               },
               {
                 featureType: 'administrative.land_parcel',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#bdbdbd'}]
               },
               {
                 featureType: 'poi',
                 elementType: 'geometry',
                 stylers: [{color: '#eeeeee'}]
               },
               {
                 featureType: 'poi',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#757575'}]
               },
               {
                 featureType: 'poi.park',
                 elementType: 'geometry',
                 stylers: [{color: '#e5e5e5'}]
               },
               {
                 featureType: 'poi.park',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#9e9e9e'}]
               },
               {
                 featureType: 'road',
                 elementType: 'geometry',
                 stylers: [{color: '#eee'}]
               },
               {
                 featureType: 'road.arterial',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#3d3523'}]
               },
               {
                 featureType: 'road.highway',
                 elementType: 'geometry',
                 stylers: [{color: '#eee'}]
               },
               {
                 featureType: 'road.highway',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#616161'}]
               },
               {
                 featureType: 'road.local',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#9e9e9e'}]
               },
               {
                 featureType: 'transit.line',
                 elementType: 'geometry',
                 stylers: [{color: '#e5e5e5'}]
               },
               {
                 featureType: 'transit.station',
                 elementType: 'geometry',
                 stylers: [{color: '#000'}]
               },
               {
                 featureType: 'water',
                 elementType: 'geometry',
                 stylers: [{color: '#c8d7d4'}]
               },
               {
                 featureType: 'water',
                 elementType: 'labels.text.fill',
                 stylers: [{color: '#b1a481'}]
               }
             ]
		});

        var image = 'images/location_icon_map_cont.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: 40.712775, lng: -74.005973},
          map: map,
          icon: image
        });
      }
      document.querySelector(".bmi").addEventListener("click", function () {
       var a = document.getElementById("age").value;
       var h = document.getElementById("height").value;
       var w = document.getElementById("weight").value;
       var bmi = w / ((h*h/ 10000));
       alert("YOUR BMI : "+Math.floor(bmi)+"\n\nNow press OK to continue");
       if(bmi>24.9)
       {
        document.querySelectorAll("h2")[0].innerHTML="🚩  Overweight";
        document.querySelector("h4").innerHTML="Overweight and obesity, as well as their related noncommunicable diseases, are largely preventable. Supportive environments and communities are fundamental in shaping people’s choices, by making the choice of healthier foods and regular physical activity the easiest choice (the choice that is the most accessible, available and affordable), and therefore preventing overweight and obesity.If your BMI is less than 18.5, it falls within the underweight range. If your BMI is 18.5 to <25, it falls within the healthy weight range. If your BMI is 25.0 to <30, it falls within the overweight range. If your BMI is 30.0 or higher, it falls within the obesity range.";
       }
       if(bmi<18.5)
       {
        document.querySelectorAll("h2")[0].innerHTML="🚩  Underweight";
        document.querySelector("h4").innerHTML="People who are underweight typically are not getting enough calories to fuel their bodies. Often, they are also suffering from malnutrition. Malnutrition means you are not taking in enough vitamins and minerals from your food.Eating nutritious foods that are high in calories is a good way to gain weight. you may be at greater risk of certain health conditions, including osteoporosis, decreased muscle strength, hypothermia and lowered immunity. You are more likely to die at a younger age.If your BMI is 16 to <18.5 , it falls within the under weight range.If your BMI is <16 , it falls within the severely under weight range.";
       }
      if(bmi<=24.9&&bmi>=18.5){
        document.querySelectorAll("h2")[0].innerHTML="🚩  Perfect  🚩";
        document.querySelector("h4").innerHTML=" A person with a perfect BMI (body mass index) typically maintains a healthy lifestyle, including eating a balanced diet, exercising regularly, and getting enough sleep. They may also seek medical advice to make sure they are in good health and not at risk for any health conditions. It is important to note that BMI is not a perfect measure of health, and other factors such as muscle mass, body composition, and genetics can also play a role in overall health.an ideal BMI is in the 18.5 to 24.9 range. For children and young people aged 2 to 18, the BMI calculation takes into account age and gender as well as height and weight. ";
      }
    });