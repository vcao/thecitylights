define(function (require) {
	var $ = require('jquery');
	var BigVideo = require('BigVideo');
	var Backbone = require('backbone');
	return {
		init: function () {
			// Initialize background
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
			// BEGIN TEST // TODO REMOVE
			BV.getPlayer().pause();
			// END TEST

			// Configure menu
//			$('#menu').mouseenter(function () {
//				$('#nav-menu').slideDown();
//			}).mouseleave(function () {
//					$('#nav-menu').slideUp();
//				});

			// Navigation
			var home = function () {
				$('section').hide();
				$('section#home').show();
			};
			var mission = function () {
				$('section').hide();
				$('section#mission').show();
				console.log('Mission complete');
			};
			var donate = function () {

			};
			var router = new Backbone.Router({
				routes: {
					'': home,
					'mission': mission,
					'donate': donate
				}
			});
			Backbone.history.start();
		}
	};
});