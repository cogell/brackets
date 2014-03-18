define(function (require) {
	var BaseView = require('BaseView');
	var _bracket = require('templates/bracket');

	return BaseView.extend({
		id: 'bracket',

		template: _bracket,

		initialize: function (options) {
			this.render();

			this.midwestView = options.midwestView;
			this.southView = options.southView;
			this.westView = options.westView;
			this.eastView = options.eastView;
			this.finalsView = options.finalsView;

			// console.log('this.$el', this.$el);
			// console.log('this.$el.find("#midwest")', this.$el.find('#midwest'));

			this.$el.find('#midwest').append(this.midwestView.el);
			this.$el.find('#south').append(this.southView.el);
			this.$el.find('#west').append(this.westView.el);
			this.$el.find('#east').append(this.eastView.el);
			this.$el.find('#finals').append(this.finalsView.el);
		}

	});
});