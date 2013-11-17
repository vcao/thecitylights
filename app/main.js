define(function (require) {
	var $ = require('jquery');
	var BigVideo = require('BigVideo');
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
			// Configure menu
			$('#menu').mouseenter(function () {
				$('#nav-menu').slideDown();
			}).mouseleave(function () {
					$('#nav-menu').slideUp();
				});
		}
	};
});