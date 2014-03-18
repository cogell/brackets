define(function (require) {
	require('backbone');

	var pubsub = _.extend({}, Backbone.Events);

	return pubsub;
});