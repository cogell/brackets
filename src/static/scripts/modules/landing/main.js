define(function (require) {
	var pubsub = require('pubsub');
	var Landing = require('modules/landing/landing');

	return {
		pubsub: pubsub,
		main: function ($root) {
			this.setAPI();
			this.view = new Landing();
			$root.append( this.view.el );
		},
		hideLanding: function () {
			console.log('hidelanding called');
			this.view.hide();
		},
		showLanding: function () {
			this.view.show();
		},
		setAPI: function () {
			this.pubsub.on('region:clicked', this.hideLanding, this);
			this.pubsub.on('map:clicked', this.showLanding, this);
		}
	};

});