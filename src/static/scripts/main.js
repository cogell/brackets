requirejs(['requirejs-config'],function(){

	requirejs([
		'pubsub',
		'modules/landing/main',
		'modules/header/main',
		'modules/bracket/main',
		'modules/popup/main'
		], function(pubsub, LandingController, HeaderController, BracketController, PopupController){

		$(document).ready(function () {

			var $root = $('#huffpostcode-march-madness');
			HeaderController.main( $root );
			LandingController.main( $root );
			BracketController.main( $root );
			PopupController.main( $root );

		});

	});

});