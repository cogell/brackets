define(function (require) {
	require('backbone');
	var Match = require('entities/match');

	return Backbone.Collection.extend({
		model: Match
	});
});