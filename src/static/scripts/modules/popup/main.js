define(function (require) {
	require('backbone');
	var pubsub = require('pubsub');
	var Popup = require('modules/popup/popup');

	return {
		pubsub: pubsub,
		main: function ($root) {
			this.setAPI();
			this.view = new Popup({
				model: new Backbone.Model(),
				windowHeight: pubsub.windowHeight
			});
			$root.append( this.view.el );
		},

		matchClicked: function (match) {
			this.view.model = match;
			this.view.render();
		},

		bracketClicked: function () {
			this.view.hide();
		},

		setAPI: function () {
			this.pubsub.on('match:clicked', this.matchClicked, this);
			this.pubsub.on('bracket:clicked', this.bracketClicked, this);
		}
	};

});