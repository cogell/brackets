requirejs(['requirejs-config'],function(){

	requirejs([
		'pubsub',
		'modules/landing/main',
		'modules/header/main',
		'modules/bracket/main'
		], function(pubsub, LandingController, HeaderController, BracketController){

		$(document).ready(function () {

			var $root = $('#huffpostcode-march-madness');
			HeaderController.main( $root );
			LandingController.main( $root );
			BracketController.main( $root );

		});

	});

});