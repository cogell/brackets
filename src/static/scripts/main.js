requirejs(['requirejs-config'],function(){

	requirejs([
		'pubsub',
		'modules/landing/main',
		'modules/header/main',
		'modules/bracket/main',
		'modules/popup/main'
		], function(pubsub, LandingController, HeaderController, BracketController, PopupController){

		$(document).ready(function () {

			console.log('Bracket App starting up...');

			if(window.location.hostname != 'localhost'){
				// load google fonts
				$('head')
					.append( $('<link rel="stylesheet" type="text/css" />')
					.attr('href', 'http://fonts.googleapis.com/css?family=Roboto:400,700') );
				$('head')
					.append( $('<link rel="stylesheet" type="text/css" />')
					.attr('href', 'http://fonts.googleapis.com/css?family=Roboto+Slab:400,700') );
				// load css sheets
				$('head')
					.append( $('<link rel="stylesheet" type="text/css" />')
					.attr('href', 'http://labs-march-psychopathy.s3-website-us-west-2.amazonaws.com/styles/main.css') );
			}

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

console.log('Main.js has been fetched.');