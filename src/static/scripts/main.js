requirejs(['requirejs-config'],function(){

	requirejs([
		'jquery',
		'd3',
		'bracket'
		], function($, d3, Bracket){

		$(document).ready(function () {
			Bracket.init();

			// TODO: move into popup view //

			// set up variables
			var data = [ 20, 45, 78 ];
			data.unshift(0); // all games start with 0 points
			var xAxisData = ['Start', '1st Half', '2nd Half', 'Total'];
			var margin = 10;
			var width =  320 - margin - margin;
			var height = 100 - margin - margin;

			// define our X and Y scale functions
			var y = d3.scale.linear()
								.domain([0, d3.max(data)])
								.range([0, height]);
			var x = d3.scale.linear()
								.domain([0, data.length])
								.range([0, width]);

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

			// define svg chart
			var svg = d3.select('.chart')
									.append('svg')
									.attr('width', width + margin + margin)
									.attr('height', height + margin + margin)
								.append('g')
									.attr('transform', 'translate('+margin+','+margin+')');

			//// RENDERING STEPS

			// add xAxis
			svg.append('g')
					.attr('class', 'x axis')
					.attr('transform', 'translate(0,' + height + ')')
					.call(xAxis);

			var shiftGroup = svg.append('g')
					.attr('transform', 'translate( 0,' + height + ')');

			// add path
			shiftGroup.append('path')
					.datum(data)
					.attr('class', 'line')
					.attr('d', line);

			// add circles
			shiftGroup.selectAll('circle')
					.data(data)
					.enter()
					.append('circle')
					.attr('r', function (i) {
						// make the first zero nothing
						if (i===0) return 0;
						return 5;
					})
					.attr('cx', function (d, i) {
						return x(i);
					})
					.attr('cy', function (d) {
						return -1 * y(d);
					});

		});

	});

});