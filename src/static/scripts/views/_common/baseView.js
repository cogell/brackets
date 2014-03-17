define(function (require) {
	require('backbone');

	return Backbone.View.extend({

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