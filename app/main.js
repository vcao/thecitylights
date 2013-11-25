define(function (require) {
	var $ = require('jquery');
	var BigVideo = require('BigVideo');
	var Backbone = require('backbone');
	return {
		// Video Player
		init: function () {
			var BV = new $.BigVideo({
				container: $('#home'),
				useFlashForFirefox: false
			});
			BV.init();
			if (Modernizr.touch) {
				BV.show('resources/images/fireworks.jpg');
			} else {
				BV.show('resources/videos/bg_tcl.mp4', {altSource: 'resources/videos/bg_tcl.ogv', ambient: true});
			}

			// Navigation
			var Handler = function (route) {
				return function () {
					// get name of current section
					var $current = $('section:visible');
					$current.fadeOut().promise()
						.done(function() {
							// pause previous video if applicable
							if ($current[0] && $current[0].id === 'home') {
								BV.getPlayer().pause();
							}
							// start routes video if applicable
							if (route === 'home') {
								BV.getPlayer().play();
							}
							$('#' + route).fadeIn()
						});
				};
			};
			var router = new Backbone.Router({
				routes: {
					'': new Handler('home'),
					'about': new Handler('about'),
					'connect': new Handler('connect'),
					'donate': new Handler('donate'),
					'mission': new Handler('mission')
				}
			});
			Backbone.history.start();
		}
	};

	// Donate FAQ
	$('h4 a').click(function() {
		e.preventDefault();
		$('#faq p').slideToggle();
	});


});