define(function (require) {
	require('backbone');
	var BaseView = require('BaseView');
	var _match = require('templates/match');

	return BaseView.extend({
		tagName: 'ul',
		template: _match,
		final: false,
		events: {
			'click': 'clicked'
		},
		initialize: function () {
			BaseView.prototype.initialize.call(this);
			this.$el.addClass('match');
			var publishState = this.model.get('publish-state');

			// handle publish state
			if(publishState == 'played'){
				this.setPlayedState();
			} else if (publishState == 'not-played'){
				this.setNotPlayedState();
			} else {
				this.setDraftState();
			}
		},
		clicked: function () {
			if(this.final){
				this.pubsub.trigger('match:clicked', this.model);
			}
		},

		setPlayedState: function () {
			this.render();
			this.$el.addClass('final');
			this.final = true;
			this.addWinnerClass();
		},

		setNotPlayedState: function () {
			this.model.set('team1-total-score', '');
			this.model.set('team2-total-score', '');
			this.render();
		},

		setDraftState: function () {
			this.model = new Backbone.Model();
			this.render();
		},

		addWinnerClass: function () {
			var winnerStr = this.model.get('winner');
			if( winnerStr == 'team1' ){
				this.$el.find('.team1').addClass('winner');
				this.$el.find('.team2').addClass('loser');
			} else if( winnerStr == 'team2' ){
				this.$el.find('.team2').addClass('winner');
				this.$el.find('.team1').addClass('loser');
			}
		}
	});
});