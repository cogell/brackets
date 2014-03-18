define(function (require) {
	require('backbone');
	var pubsub = require('pubsub');
	var Popup = require('modules/popup/popup');

	return {
		pubsub: pubsub,
		main: function ($root) {
			this.setAPI();
			this.view = new Popup({
				model: new Backbone.Model()
			});
			$root.append( this.view.el );
		},

		matchClicked: function (match) {
			// console.log('popup controller sees match clicked. match:', match);
			// console.log('this.view.model', this.view.model);
			this.view.model = match;
			// console.log('this.view.model', this.view.model);
			this.view.show();
		},

		setAPI: function () {
			this.pubsub.on('match:clicked', this.matchClicked, this);
		}
	};

});