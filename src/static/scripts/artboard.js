/*jshint -W079 */
var Bracket.Artboard = (function (Bracket) {

	var art = {};

	function createStage(){
		art.stage = new Kinetic.Stage({
			container: 'container',
			width: 480,
			height: 320
		});
	}

	function createLayer () {
		art.layer = new Kinetic.Layer();
	}

	art.main = function () {
		createStage();
		createLayer();
		var team1 = new Bracket.Team( 'name', 12, 87 );
		team1.render();

		art.layer.add( team1.el );
		art.stage.add( art.layer );
	};

	return art;

}(Bracket || {}));