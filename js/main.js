require.config({
	paths: {
		'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
		'BigVideo': 'BigVideo.js/lib/bigvideo',
		'jquery-ui': 'jquery-ui/ui/jquery-ui',
		'videojs': 'video.js/video',
		'imagesloaded': 'imagesloaded/imagesloaded',
		'eventEmitter/EventEmitter': 'eventEmitter/EventEmitter',
		'eventie/eventie': 'eventie/eventie'
	},
	shim: {
		"videojs": {exports: 'videojs'}
	}
});

require(['order!jquery', 'order!BigVideo'], function ($) {
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