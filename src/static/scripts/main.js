requirejs(['requirejs-config'],function(){

	requirejs([
		'jquery',
		'bracket'
		], function($, Bracket){

		$(document).ready( Bracket.init );

	});

});