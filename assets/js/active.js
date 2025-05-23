/*
Template: CONSULTER - Business Consulting HTML Template
Author: RRDevs
*/

(function($) {
    "use strict";

    $(document).ready( function() {

        /*** Sticky header */
        $(window).scroll(function(){
            if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
                $("header").addClass("stop");
            } else {
                $("header").removeClass("stop");
            }
        });

        /*** Search bar */
        $('.header-search').on('click', '.search-toggle', function(e) {
            e.preventDefault();
            var selector = $(this).data('selector');
            $(selector).toggleClass('show').find('.search-input').focus();
        });

        /*** mobile menu  */
		$("#hamburger").on("click", function () {
			$(".mobile-nav").addClass("show");
			$(".offcanvas-overlay").addClass("overlay-open");
		});

        $(".close-nav").on("click", function () {
			$(".mobile-nav").removeClass("show");
			$(".offcanvas-overlay").removeClass("overlay-open");
		});

		$(window).scroll(function(){
			if($("body").scrollTop() > 0 || $("html").scrollTop() > 0) {
				$(".mobile-nav").removeClass("show");
				$(".offcanvas-overlay").removeClass("overlay-open");
			}
		});

		/*** Dropdown Need class added Added */
		$(".consulter-mobile-nav ul li ul").addClass("dropdown-menu");
		$(".consulter-mobile-nav ul li ul").parent().addClass("dropdown");
		
		$(".main-menu ul li ul").parent().addClass("dropdown");
		$('.main-menu li.dropdown > a').append("<i class='fas fa-caret-down'></i>");

        /** Sidr submenu */
        function consulterMobileMenu() {
            $('.consulter-mobile-nav ul')[0].classList.add("consulter-navbar-mobile");

            var $nav = $(".consulter-navbar-mobile"),
                $back_btn = $nav.find(" > li.dropdown > ul.dropdown-menu").prepend("<li class='dropdown-back d-flex flex-wrap align-items-center justify-content-between'><div class='control ml-auto d-flex align-items-center' style='white-space: nowrap'>Back<i style='font-size: 20px; font-weight: 500; margin-left: 5px;' class='fal fa-long-arrow-left'></i></div></li>");


            // For Title
            $('.consulter-navbar-mobile li.dropdown > a').each(function(){
                $(this).siblings("ul").find("li.dropdown-back").prepend("<div class='title'><a style='color: #000'>" + $(this).text() +"</a></div>");
            });

            // open sub-level
            $('.consulter-navbar-mobile li.dropdown > a').append("<span class='dropdown-toggle' data-toggle='dropdown'></span>");
            $('.consulter-navbar-mobile li.dropdown > a .dropdown-toggle').on("click", function(e) {
                e.preventDefault();
                e.stopPropagation();

                $(this).parent().parent().addClass("is-open");
                $(this).parents().find( '.consulter-navbar-mobile' ).addClass("is-parent");


                var header = $(this).parent().parent().find('ul.dropdown-menu').height(),
                    gutter = $('.consulter-mobile-nav');

                if ( gutter ) 
                {
                    gutter.height(header+15);
                }
            });

            // go back
            $back_btn.on("click", ".dropdown-back", function(e) {
                e.stopPropagation();
                $(this)
                .parents(".is-open")
                .first()
                .removeClass("is-open");

                var header = $(this).parents(".is-parent").first().height();

                $(this)
                .parents(".is-parent")
                .first()
                .removeClass("is-parent");

                var gutter = $('.consulter-mobile-nav');

                setTimeout(function() {
                    if (gutter) {
                        gutter.height(header);
                    } 
                }, 200);
            });
        }
        consulterMobileMenu();
                
        /*==========================
           Scroll To Up Init
        ============================*/
        $.scrollUp({
            scrollName: 'scrollUp', // Element ID
            topDistance: '1110', // Distance from top before showing element (px)
            topSpeed: 2000, // Speed back to top (ms)
            animation: 'slide', // Fade, slide, none
            animationInSpeed: 300, // Animation in speed (ms)
            animationOutSpeed: 300, // Animation out speed (ms)
            scrollText: '<i class="fal fa-angle-up"></i>', // Text for element
            activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        });

		/*** Generated by CoffeeScript 1.9.2 */
		function stickyKit() {
			var reset_scroll;

			$(function() {
				return $("[data-sticky_column]").stick_in_parent({
					parent: "[data-sticky_parent]",
					offset_top: 120,
					bottoming: true,
				});
			});

			reset_scroll = function() {
				var scroller;
				scroller = $("body,html");
				scroller.stop(true);

				if ($(window).scrollTop() !== 0) {
					scroller.animate({
						scrollTop: 0
					}, "fast");
				}
				return scroller;
			};

			window.scroll_it = function() {
				var max;
				max = $(document).height() - $(window).height();

				return reset_scroll().animate({
					scrollTop: max
				}, max * 3).delay(100).animate({
					scrollTop: 0
				}, max * 3);
			};

			window.scroll_it_wobble = function() {
				var max, third;
				max = $(document).height() - $(window).height();
				third = Math.floor(max / 3);

				return reset_scroll().animate({
					scrollTop: third * 2
				}, max * 3).delay(100).animate({
					scrollTop: third
				}, max * 3).delay(100).animate({
					scrollTop: max
				}, max * 3).delay(100).animate({
					scrollTop: 0
				}, max * 3);
			};

			$(window).on("load", (function(_this) {
				return function(e) {
					return $(document.body).trigger("sticky_kit:recalc");
				};
			})(this));

			$(window).on("resize", (function(_this) {
				return function(e) {
					return $(document.body).trigger("sticky_kit:recalc");
				};
			})(this));
		}

		var window_width = $(window).width();

		if (window_width < 1200) {
			$(document.body).trigger("sticky_kit:detach");
		} else {
			stickyKit();
		}

		$( window ).resize(function() {
			window_width = $( window ).width();
			if (window_width < 1200) {
				$(document.body).trigger("sticky_kit:detach");
			} else {
				stickyKit();
			}
		});

		/*** enable lightbox */
		$('.popup-video').magnificPopup({
			type: 'iframe',
			preloader: false,
			fixedBgPos: true,
			removalDelay: 500,
			callbacks: {
				beforeOpen: function() { 
					this.st.iframe.markup = this.st.iframe.markup.replace('mfp-iframe-scaler', 'mfp-iframe-scaler mfp-with-anim');
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
		});

		/*** slick slider  */
		$('.client-brand__slider').slick();

		$('.testimonial-slider').slick({
			dots: false, 
			arrows: false,
			autoplay: true,
			slidesToShow: 3,
			infinite: true,
			slidesToScroll: 1,
			autoplaySpeed: 800,
			responsive: [
				{
					breakpoint: 1300,
					settings: {
					slidesToShow: 2
					}
				},
				{
					breakpoint: 992,
					settings: {
					  slidesToShow: 1
					}
				}
			]
		});

		$('.our-porfolio__slider').slick({
			dots: false, 
			arrows: false,
			// autoplay: true,
			slidesToShow: 1,
			infinite: true,
			slidesToScroll: 1,
			centerMode: true,
			autoplaySpeed: 800,
        	centerPadding: '621px',
			responsive: [
				{
					breakpoint: 1851,
					settings: { 
						centerPadding: '600px',
					}
				},
				{
					breakpoint: 1801,
					settings: { 
						centerPadding: '550px',
					}
				},
				{
					breakpoint: 1651,
					settings: { 
						centerPadding: '500px',
					}
				},
				{
					breakpoint: 1600,
					settings: { 
						centerPadding: '450px',
					}
				},
				{
					breakpoint: 1401,
					settings: { 
						centerPadding: '400px',
					}
				},
				{
					breakpoint: 1200,
					settings: { 
						centerPadding: '350px',
					}
				},
				{
					breakpoint: 1051,
					settings: { 
						centerPadding: '300px',
					}
				},
				{
					breakpoint: 901,
					settings: { 
						centerPadding: '250px',
					}
				},
				{
					breakpoint: 751,
					settings: { 
						centerPadding: '200px',
					}
				},
				{
					breakpoint: 651,
					settings: { 
						centerPadding: '150px',
					}
				},
				{
					breakpoint: 501,
					settings: { 
						centerPadding: '100px',
					}
				},
				{
					breakpoint: 421,
					settings: { 
						centerPadding: '50px',
					}
				}
			]
		});

		$('.our-porfolio__slider__2').slick({
			dots: false, 
			arrows: false,
			autoplay: true,
			slidesToShow: 4,
			infinite: true,
			slidesToScroll: 1,
			autoplaySpeed: 800,
			responsive: [
				{
					breakpoint: 1851,
					settings: { 
						slidesToShow: 4,
					}
				},
				{
					breakpoint: 1251,
					settings: { 
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 751,
					settings: { 
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 501,
					settings: { 
						slidesToShow: 1,
					}
				}
			]
		});
		
		$('.testimonial_element').slick({
			dots: true, 
			arrows: false,
			autoplay: true,
			slidesToShow: 2,
			infinite: true,
			slidesToScroll: 1,
			// autoplaySpeed: 800,
			responsive: [
				{
					breakpoint: 1851,
					settings: { 
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 1251,
					settings: { 
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 751,
					settings: { 
						slidesToShow: 1,
					}
				}
			]
		});

		$('.testimonial-slider-home-2').slick({
			dots: false, 
			arrows: true,
			autoplay: true,
			slidesToShow: 3,
			infinite: true,
			slidesToScroll: 1,
			autoplaySpeed: 800,
			appendArrows: $('.slider-controls .testimonial-slider-arrows'),
			prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-long-arrow-alt-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-long-arrow-alt-right' aria-hidden='true'></i></button>",
			responsive: [
				{
					breakpoint: 1300,
					settings: {
					slidesToShow: 2
					}
				},
				{
					breakpoint: 992,
					settings: {
					  slidesToShow: 1
					}
				}
			]
		});

		$('.testimonial-slider-home-1').slick({
			dots: false, 
			arrows: true,
			autoplay: true,
			slidesToShow: 3,
			infinite: true,
			slidesToScroll: 1,
			autoplaySpeed: 800,
			appendArrows: $('.slider-controls .testimonial-slider-arrows'),
			prevArrow:"<button type='button' class='slick-prev pull-left'><i class='icon-left-3' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='icon-right-3' aria-hidden='true'></i></button>",
			responsive: [
				{
					breakpoint: 1300,
					settings: {
					slidesToShow: 2
					}
				},
				{
					breakpoint: 992,
					settings: {
					  slidesToShow: 1
					}
				}
			]
		});

		$('.employee-friendly__slider').slick({
			dots: false, 
			arrows: true,
			autoplay: true,
			slidesToShow: 3,
			infinite: true,
			slidesToScroll: 1,
			autoplaySpeed: 800,
			appendArrows: $('.slider-controls .slider-arrows'),
			prevArrow:"<button type='button' class='slick-prev pull-left'><i class='icon-left-3' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='icon-right-3' aria-hidden='true'></i></button>",
			responsive: [
				{
					breakpoint: 1300,
					settings: {
					slidesToShow: 2
					}
				},
				{
					breakpoint: 992,
					settings: {
					  slidesToShow: 1
					}
				}
			]
		});

		$('.banner-slider').slick({
			dots: true, 
			arrows: true,
			autoplay: true,
			slidesToShow: 1,
			autoplay: false,
			infinite: true,
			slidesToScroll: 1,
			autoplaySpeed: 1500,
			appendArrows: $('.slider-controls .banner-slider-arrows'),
			prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-long-arrow-alt-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-long-arrow-alt-right' aria-hidden='true'></i></button>"
		});
		
		$('.banner-slider_2').slick({
			dots: false, 
			arrows: true,
			autoplay: true,
			slidesToShow: 1,
			infinite: true,
			slidesToScroll: 1,
			autoplaySpeed: 1500,
			appendArrows: $('.slider-controls .banner-slider-arrows'),
			prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-long-arrow-alt-left' aria-hidden='true'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-long-arrow-alt-right' aria-hidden='true'></i></button>"
		});
		

		/*** Animation */
		$('.banner-slider').on('init', function(e, slick) {
			var $firstAnimatingElements = $('div.slick-slide:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		}); 

		$('.banner-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('div.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements); 
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function() {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function() {
						$this.removeClass($animationType);
				});
			});
		};

		$('.chart').easyPieChart({
			size: 80,
			barColor: "#FF9C00",
			rotate: 65,
			scaleLength: 0,
			lineWidth: 10,
			trackColor: "#DEE1E3",
			lineCap: "circle",
			animate: 2000,
		});

		/*** pricing table */
		var pricingMonthlyBtn = document.getElementById("monthly-btn"),
		pricingYearlyBtn = document.getElementById("yearly-btn"),
		pricingMonthly = document.getElementById("monthly"),
		pricingYearly = document.getElementById("yearly");

		if ( pricingMonthlyBtn, pricingYearlyBtn ) {
			pricingMonthlyBtn.addEventListener("click", function(){ 
				pricingYearly.classList.add("hide");
				pricingMonthly.classList.remove("hide");
				pricingYearlyBtn.classList.remove("active");
				pricingMonthlyBtn.classList.add("active");
			});

			pricingYearlyBtn.addEventListener("click", function(){ 
				pricingYearly.classList.remove("hide");
				pricingMonthly.classList.add("hide");
				pricingMonthlyBtn.classList.remove("active");
				pricingYearlyBtn.classList.add("active");
			});
		}

        /*** lastNobullet */
        function lastNobullet() {
            var lastElement = false;
            $(".last_no_bullet ul li, .last_no_bullet .col-xl-3.col-lg-4.col-sm-6").each(function() {
                if (lastElement && lastElement.offset().top != $(this).offset().top) {
                    $(lastElement).addClass("no_bullet");
                } else {
                    $(lastElement).removeClass("no_bullet");
                }
                lastElement = $(this);
            }).last().addClass("no_bullet");
        };
        lastNobullet();

        $(window).resize(function(){
            lastNobullet();
        });

    }); // end document ready function
 
	function loader() {
        $(window).on('load', function() {
            // Animate loader off screen
			const preloader = $(".preloader");
            preloader.addClass('loaded');                    
            preloader.delay(600).fadeOut();
			
			/*** Number Counter */
			$('.counter').counterUp({
				delay: 10,
				time: 1000
			});
        });
    }
    loader();

})(jQuery); // End jQuery

/*** Footer Google map */
var mapId = document.getElementById("map");
var contactMapId = document.getElementById("contact-map");
var servicesMapId = document.getElementById("services-map__map");

var pinRed = document.querySelector(".pinRed");
var pinYellow = document.querySelector(".pinYellow");


if (mapId || contactMapId || servicesMapId) {

	function initMap() {
		var footerLocation = [
			['Dhaka', 23.851602, 90.3782046],
			['Pabna', 23.854842, 90.3782949]
		];

		var mapOptions = { 
	        zoom: 15,
	        center: new google.maps.LatLng(footerLocation[0][1], footerLocation[0][2]),
	        scrollwheel: true,
	        disableDefaultUI: true,

	        styles: [
				{
					"featureType": "administrative",
					"elementType": "all",
					"stylers": [
						{
							"saturation": "-100"
						}
					]
				},
				{
					"featureType": "administrative.province",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"lightness": 65
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"lightness": "50"
						},
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
						{
							"saturation": "-100"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "all",
					"stylers": [
						{
							"lightness": "30"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "all",
					"stylers": [
						{
							"lightness": "40"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
						{
							"hue": "#ffff00"
						},
						{
							"lightness": -25
						},
						{
							"saturation": -97
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "labels",
					"stylers": [
						{
							"lightness": -25
						},
						{
							"saturation": -100
						}
					]
				}
			]
	    };
		var map = new google.maps.Map(mapId, mapOptions);
		if (pinRed) {
			for (i = 0; i < footerLocation.length; i++) {
				marker = new google.maps.Marker({
					position: new google.maps.LatLng(footerLocation[i][1],footerLocation[i][2]),
					map: map,
					animation: google.maps.Animation.DROP,
					icon: 'https://i.ibb.co/KcPVmZx/red-Icon-Location.png'
				});
			}
		} else if (pinYellow) {
			for (i = 0; i < footerLocation.length; i++) {
				marker = new google.maps.Marker({
					position: new google.maps.LatLng(footerLocation[i][1],footerLocation[i][2]),
					map: map,
					animation: google.maps.Animation.DROP,
					icon: 'https://i.ibb.co/rZg3M67/yellow-Icon-Location.png'
				});
			}
		} else {
			for (i = 0; i < footerLocation.length; i++) {
				marker = new google.maps.Marker({
					position: new google.maps.LatLng(footerLocation[i][1],footerLocation[i][2]),
					map: map,
					animation: google.maps.Animation.DROP,
					icon: 'https://i.ibb.co/qphb14X/green-Icon-Location.png'
				});
			}
		}

		// Services Map
		var servicesLocation = { lat: 23.854322, lng: 90.3782046 }; 
		var servicesMapOptions = { 
	        zoom: 15,
	        center: servicesLocation,
	        scrollwheel: true,
	        disableDefaultUI: true,

	        styles: [
				{
					"featureType": "all",
					"elementType": "labels.text",
					"stylers": [
						{
							"color": "#878787"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"color": "#f9f5ed"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
						{
							"color": "#f5f5f5"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#c9c9c9"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"color": "#aee0f4"
						}
					]
				}
			]
	    };

		if ( servicesMapId ) {

			var map = new google.maps.Map(servicesMapId, servicesMapOptions);
 
			marker = new google.maps.Marker({
				position:  servicesLocation,
				map: map,
				animation: google.maps.Animation.DROP,
				icon: 'https://i.ibb.co/DYSHQ1G/green-Icon-big-Location.png'
			});
		}

		// Contact MapId
		var contactLocation = { lat: 23.854322, lng: 90.3782046 }; 
		var contactMapOptions = { 
	        zoom: 15,
	        center: contactLocation,
	        scrollwheel: true,
	        disableDefaultUI: true,

	        styles: [
				{
					"featureType": "all",
					"elementType": "labels.text",
					"stylers": [
						{
							"color": "#878787"
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"color": "#f9f5ed"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
						{
							"color": "#f5f5f5"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#c9c9c9"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"color": "#aee0f4"
						}
					]
				}
			]
	    };

		if ( contactMapId ) {

			var map = new google.maps.Map(contactMapId, contactMapOptions);
 
			marker = new google.maps.Marker({
				position:  contactLocation,
				map: map,
				animation: google.maps.Animation.DROP,
				icon: 'https://i.ibb.co/GR5cVt4/green-Icon-md-Location.png'
			});
		}
		 
	}
}
