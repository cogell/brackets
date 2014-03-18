define(function (require) {
	var pubsub = require('pubsub');
	var Header = require('modules/header/header');

	return {
		pubsub: pubsub,

		main: function ($root) {
			var v = new Header();
			$root.append( v.el );

			console.log('this.pubsub', this.pubsub);

		}
	};

});