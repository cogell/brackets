define(function (require) {
	var BaseView = require('BaseView');
	var _header = require('templates/header');

	return BaseView.extend({
		tagName: 'header',
		template: _header,
		initialize: function () {
			BaseView.prototype.initialize.call(this);
			this.render();
		}

	});

});