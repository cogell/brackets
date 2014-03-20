define(function (require) {
  var d3 = require('d3');
  var BaseView = require('BaseView');
	var _popup = require('templates/popup');

	return BaseView.extend({
		template: _popup,

    events: {
      'click .close': 'closeClicked'
    },

    initialize: function(options){
      BaseView.prototype.initialize.call(this);
      this.windowHeight = options.windowHeight;
    },

    render: function () {
      this.$el.empty();
      BaseView.prototype.render.call(this);
      this.$el.addClass('popup');

      // conditional for continue button
      if(this.model.get('match-post-link').length >= 5){
        this.$el.find('.continue').addClass('active');
      }

      // conditional for centering styles
      if(this.windowHeight >= 650){
        this.$el.addClass('tall');
      }

      // conditional for winning team
      if(this.model.get('winner')=='team1'){
        this.$el.find('.team1').addClass('winner');
      } else {
        this.$el.find('.team2').addClass('winner');
      }

      this.renderChart();
      this.show();
    },

    show: function () {
      this.pubsub.trigger('popup:opened');
      this.$el.addClass('active');
    },

    hide: function () {
      this.$el.removeClass('active');
    },

    closeClicked: function () {
      this.pubsub.trigger('popup:closed');
      this.hide();
    },

    // D3 YUMMY
    // TEMP
    renderChart: function () {
      var t11 = this.model.get('team1-first-half-score');
      var t13 = this.model.get('team1-total-score');

      var t21 = this.model.get('team2-first-half-score');
      var t23 = this.model.get('team2-total-score');

      var team1 = [
        {score: t11},
        {score: t13}
      ];
      var team2 = [
        {score: t21},
        {score: t23}
      ];

      team1.unshift({score: 0}); // all games start with 0 points
      team2.unshift({score: 0}); // all games start with 0 points

      // need to walk thru each array and compare points to give
      // the higher point the top number on that circle
      _.each(team1, function (team1, i) {
        var team1Score = team1.score;
        var team2Score = team2[i].score;

        if(team2Score > team1Score){
          team2[i].higher = true;
        } else {
          team1.higher = true;
        }
      });

      var xAxisData = ['Start', '1st Half', 'Total'];
      var margin = 20;
      var xaxisMargin = 30;
      var aboveCricleMargin = 30;
      var width =  300 - margin - margin;
      var height = 150 - margin - margin;

      // define our X and Y scale functions
      var y = d3.scale.linear()
                .domain([0, d3.max(team1, function (t) {
                  return t.score;
                })])
                .range([0+xaxisMargin, height-aboveCricleMargin]);
      var x = d3.scale.linear()
                .domain([0, team1.length])
                // don't know why I need to make the range extra big to get the
                // drawing to render correctly
                .range([0, width + margin*5]);

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

      //// RENDERING STEPS

      // define svg chart
      var svg = d3.select(this.$el.find('.chart')[0])
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
      var team2Group;
      var team1Group;

      if(this.model.get('winner') == 'team1'){
        team2Group = shiftGroup.append('g').attr('class', 'team2');
        team1Group = shiftGroup.append('g').attr('class', 'team1 winner');
      } else {
        team1Group = shiftGroup.append('g').attr('class', 'team1');
        team2Group = shiftGroup.append('g').attr('class', 'team2 winner');
      }

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
    } // renderChart

	});

});