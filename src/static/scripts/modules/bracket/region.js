define(function (require) {
	var BaseView = require('BaseView');
	var Match = require('modules/bracket/match');
	var _region = require('templates/region');

	return BaseView.extend({
		template: _region,

		initialize: function (options) {
			BaseView.prototype.initialize.call(this);

			this.render();
			this.$el.addClass( options.class + ' region' || 'region');
			this.listenTo(this.collection, 'add', this.renderCollection);
		},


		renderCollection: function () {
			var _this = this;
			if (this.collection.length == 15){
				this.collection.each(function (match) {
					var round = match.get('round');
					round = '.' + round; // going to use this to query for a class

					var v = new Match({ model: match });

					_this.$el.find(round).append( v.el );

				});
			}
		}

	});
});