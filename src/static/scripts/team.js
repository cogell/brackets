Bracket.Team = (function (Bracket) {

	var t = {};

	function Team( name, seed, score, x, y){

		this.name = name;
		this.seed = seed;
		this.score = score;

		this.x = x;
		this.y = y;

		this.render = function () {
			this.el = createGroup();
			this.el.add( createRect() );
			this.el.add( createText() );
		};

		function createGroup () {
			return new Kinetic.Group({
				x: this.x / 2,
				y: this.y / 2
			});
		}

		function createRect () {
			return new Kinetic.Rect({
				x: 0, // relative to group
				y: 0, // relative to group
				width: 100,
				height: 50,
				fill: 'blue',
				stroke: 'grey',
				strokeWidth: 4
			});
		}

		function createText () {
			return new Kinetic.Text({
        x: 10, // relative to group
        y: 10, // relative to group
        text: 'Simple Text',
        fontSize: 30,
        fontFamily: 'Calibri',
        fill: 'black'
      });
		}

	}

	return t;

}(Bracket || {}));