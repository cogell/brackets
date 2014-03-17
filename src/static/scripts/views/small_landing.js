define(function (require) {
	var BaseView = require('baseView');
	var _landing = require('templates/small_landing');
	require('fittext');

	return BaseView.extend({
		template: _landing,

		events: {
			'click .facebook': 'fbClicked',
			'click .twitter': 'twitClicked',

			'click .midwest': 'regionClicked',
			'click .south': 'regionClicked',
			'click .west': 'regionClicked',
			'click .east': 'regionClicked',
			'click .finals': 'regionClicked'
		},

		render: function () {
			BaseView.prototype.render.call(this);
			this.$el.addClass('smallLanding');
			// this.$el.find('.fittext').fitText();
		},

		// BRACKETS
		regionClicked: function (e) {
			e.preventDefault();
			var region = $(e.target).closest('.region').data('region');
			console.log(region + ' region was clicked!');
		},


		// SOCIAL
		fbClicked: function (e) {
			e.preventDefault();
		},

		twitClick: function (e) {
			e.preventDefault();
		}


	});
});