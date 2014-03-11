define(function (require) {
	require('kinetic');

	return function Team ( params ) {
		this.name = params.name;
		this.seed = params.seed;
		this.score = params.score;

		this.text = this.seed + ' ' + this.name + ' ' + this.score;

		this.x = params.x;
		this.y = params.y;
		this.width = params.width;

		this.render = function () {
			this.el = createGroup( this.x, this.y );
			this.el.rect = createRect( this.width );
			this.el.text = createText( this.text );
			console.log('this.el.text.getTextWidth()', this.el.text.getTextWidth());
			this.el.add( this.el.rect );
			this.el.add( this.el.text );
		};

		function createGroup (x, y) {
			return new Kinetic.Group({
				x: x,
				y: y
			});
		}

		function createRect ( width ) {
			return new Kinetic.Rect({
				x: 0, // relative to group
				y: 0, // relative to group
				width: width,
				height: 50,
				fill: 'grey'
			})
			.on('mouseover', function () {
				// console.log('mouseover fire on rect');
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