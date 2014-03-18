define(function (require) {
	require('backbone');
	var pubsub = require('pubsub');

	return Backbone.View.extend({
		initialize: function  () {
			// Backbone.View.apply(this, options);
			this.pubsub = pubsub;
		},

		render: function () {
			if( this.model ){
				this.$el.html(this.template(this.model.attributes));
			} else {
				this.$el.html(this.template());
			}
			return this;
		}

	});

});