require.config({
		paths: {
			'BigVideo': 'BigVideo.js/lib/bigvideo',
			'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
			'jquery-ui': 'jquery-ui/ui/jquery-ui',
			'videojs': 'video.js/video',
			'imagesloaded': 'imagesloaded/imagesloaded',
			'eventEmitter/EventEmitter': 'eventEmitter/EventEmitter',
			'eventie/eventie': 'eventie/eventie'
		},
		shim: {
			'videojs': {
				deps: ['jquery'],
				exports: 'videojs'
		},
			'BigVideo': {
				deps: ['jquery'],
				exports: 'BigVideo'
		},
			'jquery-ui': {
				deps: ['jquery'],
				exports: 'jquery-ui'
			}
	}
});

require(['jquery'], function ($) {
	$(document).ready(function() {
		$('#menu').mouseenter(function() {
			$('#nav-menu').slideDown();
		});
		$('#menu').mouseleave(function() {
			$('#nav-menu').slideUp();
		});
	});
});

require(['jquery', 'jquery-ui', 'BigVideo'], function ($) {
	$(function() {
		var BV = new $.BigVideo({useFlashForFirefox:false});
		BV.init();
		if (Modernizr.touch) {
		    BV.show('img/fireworks.jpg');
		} else {
		    BV.show('img/bg_tcl.mp4',{altSource:'img/bg_tcl.ogv',ambient:true});
		}
	});
});

