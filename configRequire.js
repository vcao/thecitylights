var require = {
	baseUrl: '.',
	paths: {
		'analytics': 'resources/js/analytics',
		'modernizer': 'resources/js/modernizr-2.6.2.min',
		'jquery': 'resources/js/jquery-1.10.2.min',
		'jquery-ui': 'resources/js/jquery-ui/ui/jquery-ui',
		'backbone': 'resources/js/backbone-min',
		'underscore': 'resources/js/underscore-min',
		'BigVideo': 'resources/js/BigVideo.js/lib/bigvideo',
		'videojs': 'resources/js/video.js/video',
		'imagesloaded': 'resources/js/imagesloaded/imagesloaded',
		'EventEmitter': 'resources/js/eventEmitter/EventEmitter',
		'eventie': 'resources/js/eventie/eventie'
	},
	shim: {
		'videojs': {
			deps: ['jquery'],
			exports: 'videojs'
		},
		'jquery-ui': {
			deps: ['jquery'],
			exports: 'jquery-ui'
		},
		'backbone': {
			deps: ['underscore'],
			exports: 'Backbone'
		}
	}
};
