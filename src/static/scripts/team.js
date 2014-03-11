define(function (require) {
	require('kinetic');

	return function Team ( params ) {
		this.name = params.name;
		this.seed = params.seed;
		this.score = params.score;

		this.text = this.seed + ' ' + this.name + ' ' + this.score;

		this.x = params.x;
		this.y = params.y;

		this.render = function () {
			this.el = createGroup( this.x, this.y );
			this.el.add( createRect() );
			this.el.add( createText( this.text ) );
		};

		function createGroup (x, y) {
			return new Kinetic.Group({
				x: x,
				y: y
			});
		}

		function createRect () {
			return new Kinetic.Rect({
				x: 0, // relative to group
				y: 0, // relative to group
				width: 100,
				height: 50,
				fill: 'grey'
			});
		}

		function createText ( text ) {
			return new Kinetic.Text({
        x: 10, // relative to group
        y: 10, // relative to group
        text: text,
        fontSize: 30,
        fontFamily: 'Calibri',
        fill: 'black'
      });
		}
	};

});