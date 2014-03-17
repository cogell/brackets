requirejs(['requirejs-config'],function(){

	requirejs([
		'jquery',
		'd3',
		'bracket'
		], function($, d3, Bracket){

		$(document).ready(function () {
			// Bracket.init();

			// TODO: move into popup view //

			// TODO: handle overtime in chart
			// set up variables
			var team1 = [
				{score: 20},
				{score: 45},
				{score: 78}
			];
			var team2 = [
				{score: 22},
				{score: 38},
				{score: 60}
			];
			team1.unshift({score: 0}); // all games start with 0 points
			team2.unshift({score: 0}); // all games start with 0 points

			// need to walk thru each array and compare points to give
			// the higher point the top number on that circle
			_.each(team1, function (team1, i) {
				var team1Score = team1.score;
				var team2Score = team2[i].score;
				// console.log('team1Score, team2Score', team1Score, team2Score);

				if(team2Score > team1Score){
					// console.log('team2[i] is bigger', team2[i]);
					team2[i].higher = true;
					// console.log('team2[i]', team2[i]);
				} else {
					team1.higher = true;
				}
			});

			console.log('team1', team1);
			console.log('team2', team2);

			var xAxisData = ['Start', '1st Half', '2nd Half', 'Total'];
			var margin = 20;
			var xaxisMargin = 30;
			var width =  300 - margin - margin;
			var height = 150 - margin - margin;

			// define our X and Y scale functions
			var y = d3.scale.linear()
								.domain([0, d3.max(team1, function (t) {
									return t.score;
								})])
								.range([0+xaxisMargin, height]);
			var x = d3.scale.linear()
								.domain([0, team1.length])
								// don't know why I need to make the range extra big to get the
								// drawing to render correctly
								.range([0, width + margin + margin]);

			// define our line function
			var line = d3.svg.line()
										.x(function (d, i) {
											return x(i);
										})
										.y(function (d) {
											// the -1 is need since the axis system is currently flipped
											// which is the default in an svg element
											return -1 * y(d);
										});

			// define our xAxis function
			var xAxis = d3.svg.axis()
										.scale(x)
										.orient('bottom');

			//// RENDERING STEPS

			// define svg chart
			var svg = d3.select('.chart')
									.append('svg')
									.attr('width', width + margin + margin)
									.attr('height', height + margin + margin)
								.append('g')
									.attr('transform', 'translate('+margin+','+margin+')');


			// define a shifted group to make a more natural x,y coordinate system
			// out of the SVG area
			var shiftGroup = svg.append('g')
					.attr('transform', 'translate( 0,' + height + ')');

			// draw dead simple xAxis line
			shiftGroup.append('line')
					.attr('class', 'x axis')
					.attr('x1', 0 - margin)
					.attr('y1', - xaxisMargin/2)
					.attr('x2', function () {
						return x(3) + margin;
					})
					.attr('y2', - xaxisMargin/2);

			// add labels to xAxis
			shiftGroup.selectAll('text')
								.data(xAxisData)
								.enter()
								.append('text')
								.text(function(d){return d;})
								.attr('y', 0)
								.attr('x', function (d, i) {
									return x(i);
								})
								.attr('class', 'xAxisText');
								// .style('text-anchor', 'middle');

			//// CREATE G's FOR EACH TEAM
			// render winner last !!!
			var team2Group = shiftGroup.append('g').attr('class', 'team2');
			var team1Group = shiftGroup.append('g').attr('class', 'team1 winner');

			//// TEAM 1 & TEAM 2 PATHS
			createTeamPaths( team1Group, team1 );
			createTeamPaths( team2Group, team2 );

			function createTeamPaths (g, data) {
				g.append('path')
					.datum(data)
					.attr('class', 'scoreLine')
					.attr('d', function (data) {
						var score = [];
						_.each(data,function (datum) {
							score.push(datum.score);
						});
						return line(score);
					});
			}

			//// TEAM 1 & TEAM 2 POINTS
			createTeamCircles( team1Group, team1 );
			createTeamCircles( team2Group, team2 );

			function createTeamCircles ( g, data ) {
				var node = g.selectAll('.nodes')
											.data(data)
											.enter()
										.append('g')
											.attr('class', 'node');
				// circle
				node.append('circle')
					.attr('class', 'scoreCircle')
					.attr('r', function (d) {
						// make the first zero nothing
						if (d.score===0) return 0;
						return 5;
					})
					.attr('cx', function (d, i) {
						return x(i);
					})
					.attr('cy', function (d) {
						return -1 * y(d.score);
					});

				// text
				node.append('text')
					.attr('dx', function(d, i){
						return x(i);
					})
					.attr('dy', function (d) {
						var bump = -15;
						if(d.higher){
							console.log('higher d', d);
							bump = 12;
						}
						return (-1 * y(d.score)) - bump;
					})
					.text(function (d) {
						if(d.score===0) return '';
						return d.score;
					});
			}

		});

	});

});