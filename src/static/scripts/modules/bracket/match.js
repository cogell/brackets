define(function (require) {
	var BaseView = require('BaseView');
	var _match = require('templates/match');

	return BaseView.extend({
		tagName: 'ul',
		template: _match,
		initialize: function () {
			BaseView.prototype.initialize.call(this);
			this.render();
			this.$el.addClass('match');
		}
	});
});