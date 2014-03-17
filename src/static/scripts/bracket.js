define(function (require) {
	require('jquery');
	require('underscore');
	require('tabletop');

	var Artboard = require('artboard');
	var Team = require('team');
	var Match = require('match');

	var Bracket = window.Bracket = {};

	Bracket.init = function init () {
		console.log('Bracket App Starting Up...');

		Bracket.artboard = new Artboard( 'bracket-canvas', 320, 480 );
		Bracket.artboard.render();

		Bracket.fetchData();

	};

	Bracket.fetchData = function fetchData () {
		Bracket.tabletop = Tabletop.init({
			key: '0AoFVfb01eGFHdEhXR0MwTFdtWXI5WGE3UUMyZFI0Y0E',
			callback: Bracket.dataHandler,
			simpleSheet: true
		});
	};

	Bracket.dataHandler = function dataHandler () {

		// create an array of matches for each sheet in the spreadsheet
		// the arrays are attached to Bracket by their spreadsheet names ex. Bracket['round 2']
		_.each(Bracket.tabletop.sheets(), function ( model ) {
			console.log('model', model);
			Bracket[model.name.toString()] = Bracket.createMatchesArray( model.elements );
		});

	};

	Bracket.createMatchesArray = function createMatchesArray ( data ) {
		var toReturn = [];

		_.each(data, function( matchData ){

			// specific to spreadsheet layout
			var team1 = new Team({
				name: matchData['team1-name'],
				seed: matchData['team1-seed'],
				score: matchData['team1-score'],
				x: 0,
				y: 0,
				width: 200
			});

			var team2 = new Team({
				name: matchData['team2-name'],
				seed: matchData['team2-seed'],
				score: matchData['team2-score'],
				x: 0,
				y: 60,
				width: 200
			});

			var match = new Match({
				region: matchData.region,
				team1: team1,
				team2: team2,
				x: 0,
				y: 0,
				matchPopupText: matchData['match-popup-text']
			});

			toReturn.push( match );
		});

		return toReturn;
	};

	return Bracket;

});