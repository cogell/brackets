define(function (require) {
	require('jquery');
	var Artboard = require('artboard');
	var Team = require('team');

	var Bracket = {};

	Bracket.init = function init () {
		console.log('Bracket App Starting Up...');

		var artboard = new Artboard( 'bracket-canvas', 320, 480 );
		artboard.render();

		var team = new Team({
			name: 'Duke',
			seed: 12,
			score: '',
			x: 0,
			y: 0
		});
		team.render();

		artboard.addKineticElement( team.el );
		artboard.stage.batchDraw();

	};

	return Bracket;

});