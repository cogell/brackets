define(function (require) {
	var pubsub = require('pubsub');
	var Landing = require('modules/landing/landing');

	return {
		pubsub: pubsub,
		main: function ($root) {
			var v = new Landing();
			$root.append( v.el );
		}
	};

});