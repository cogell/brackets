define(function (require) {
	require('kinetic');

	return function Match ( params ) {
		this.region = params.region;

		this.team1 = params.team1;
		this.team2 = params.team2;

		this.x = params.x;
		this.y = params.y;


		this.matchPopupText = params.matchPopupText;

		this.render = function render () {
			this.el = createGroup( this.x, this.y );
			this.team1.render();
			this.team2.render();
			this.el.add( this.team1.el );
			this.el.add( this.team2.el );

			this.addHandlers();
		};

		this.addHandlers = function addHandlers () {
			this.el.on('click', function () {
				console.log( this.matchPopupText );
			});
		};

		function createGroup (x, y) {
			return new Kinetic.Group({
				x: x,
				y: y
			});
		}

	};
});