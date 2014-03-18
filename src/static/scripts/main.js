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

			window.BracketController = BracketController;
			BracketController.main( $root );


			// // CREATE LANDING
			// var v = new SmallLanding();
			// v.render();
			// $root.append( v.$el );


			// when region triggered
			// create new bracket view
			// (have prefetched the data)
			pubsub.on('test', function () {
				console.log('the main controller saw "test" event fire');
			});

		});

	});

});