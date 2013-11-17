/**
 * RequireJs Bootstrap
 */
require([
	'app/main.js',
	'modernizer',
	'analytics'
], function (app) {
	less.watch();
	app.init();
});