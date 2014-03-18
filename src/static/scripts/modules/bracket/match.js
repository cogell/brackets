define(function (require) {
	var BaseView = require('BaseView');
	var _match = require('templates/match');

	return BaseView.extend({
		tagName: 'ul',
		template: _match,
		events: {
			'click': 'clicked'
		},
		initialize: function () {
			BaseView.prototype.initialize.call(this);
			this.render();
			this.$el.addClass('match');
		},
		clicked: function () {
			this.pubsub.trigger('match:clicked', this.model);
		}
	});
});