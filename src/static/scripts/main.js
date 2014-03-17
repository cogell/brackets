requirejs(['requirejs-config'],function(){

	requirejs([
		'views/small_landing'
		], function(SmallLanding){

		$(document).ready(function () {
			// Bracket.init();

			var $root = $('#huffpostcode-march-madness');

			var v = new SmallLanding();
			v.render();
			$root.append( v.$el );
		});

	});

});