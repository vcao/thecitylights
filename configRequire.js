var require = {
	baseUrl: '.',
	paths: {
		'BigVideo': 'resources/js/BigVideo.js/lib/bigvideo',
		'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
		'jquery-ui': 'resources/js/jquery-ui/ui/jquery-ui',
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
		}
	}
};
