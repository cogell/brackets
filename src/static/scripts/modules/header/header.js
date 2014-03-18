define(function (require) {
	var BaseView = require('BaseView');
	var _header = require('templates/header');

	return BaseView.extend({
		tagName: 'header',
		template: _header,
		events: {
			'click .map': 'mapClicked'
		},

		initialize: function () {
			BaseView.prototype.initialize.call(this);
			this.render();
		},

		setHeader: function (text) {
			this.$el.find('.title').text(text);
		},

		setMap: function (text) {
			this.$el.find('.map-wrapper').attr('class', 'map-wrapper ' + text);
		},

		mapClicked: function () {
			this.trigger('map:clicked');
			this.setHeader('NCAA 2014 Tournament');
			this.$el.find('.map-wrapper').attr('class', 'map-wrapper');
		}

	});

});