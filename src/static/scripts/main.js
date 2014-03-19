requirejs(['requirejs-config'],function(){

	requirejs([
		'pubsub',
		'modules/landing/main',
		'modules/header/main',
		'modules/bracket/main',
		'modules/popup/main'
		], function(pubsub, LandingController, HeaderController, BracketController, PopupController){

		$(document).ready(function () {

			// set global window width and height measurements on pubsub object
			pubsub.windowWidth = $(window).width();
			pubsub.windowHeight = $(window).height();

			// set global window width and height watcher
			$(window).resize(function () {
				pubsub.windowWidth = $(window).width();
				pubsub.windowHeight = $(window).height();
				pubsub.trigger('window:resized');
			});

			var $root = $('#huffpostcode-march-madness');
			HeaderController.main( $root );
			LandingController.main( $root );
			BracketController.main( $root );
			PopupController.main( $root );

		});

	});

});