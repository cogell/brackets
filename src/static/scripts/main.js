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
			var margin = 20;
			var xaxisMargin = 30;
			var width =  300 - margin - margin;
			var height = 150 - margin - margin;

			// define our X and Y scale functions
			var y = d3.scale.linear()
								.domain([0, d3.max(data)])
								.range([0+xaxisMargin, height]);
			var x = d3.scale.linear()
								.domain([0, data.length])
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
									console.log('d, i', d, i);
									console.log('x(i)', x(i));
									return x(i);
								})
								.attr('class', 'xAxisText');
								// .style('text-anchor', 'middle');

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