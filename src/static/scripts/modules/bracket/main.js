define(function (require) {
	require('tabletop');

	var pubsub = require('pubsub');
	// require all views and models you'll need
	var Bracket = require('modules/bracket/bracket');
	var Region = require('modules/bracket/region');
	var Match = require('entities/match');
	var Matches = require('entities/matches');

	return {
		allMatches: [],
		pubsub: pubsub,
		main: function ($root) {

			this.$root = $root;

			this.pubsub.trigger('bracket:loading');

			this.setAPI();
			this.createRegionCollections();
			this.createViews();
			this.initTabletop();

			this.pubsub.trigger('bracket:loaded');

			// add functionality to region-view to render a match view
			// for each model, will need to parse into different divs
			// based on their round
		},

		setAPI: function () {
			this.pubsub.on('region:clicked', this.regionClicked, this);
			this.pubsub.on('map:clicked', this.mapClicked, this);
		},
		mapClicked: function(){
			this.midwestView.hide();
			this.southView.hide();
			this.westView.hide();
			this.eastView.hide();
			this.finalsView.hide();
		},

		regionClicked: function ( regionStr ) {
			if ( regionStr == 'midwest' ){
				this.midwestView.show();
			}
			else if ( regionStr == 'south' ){
				this.southView.show();
			}
			else if ( regionStr == 'west' ){
				this.westView.show();
			}
			else if ( regionStr == 'east' ){
				this.eastView.show();
			}
			else if ( regionStr == 'finals' ){
				this.finalsView.show();
			}
		},

		createRegionCollections: function () {
			this.midwestCollection = new Matches();
			this.southCollection = new Matches();
			this.westCollection = new Matches();
			this.eastCollection = new Matches();
			this.finalsCollection = new Matches();
		},

		createViews: function () {

			this.midwestView = new Region({
				collection: this.midwestCollection,
				class: 'midwest'
			});

			this.southView = new Region({
				collection: this.southCollection,
				class: 'south'
			});

			this.westView = new Region({
				collection: this.westCollection,
				class: 'west'
			});

			this.eastView = new Region({
				collection: this.eastCollection,
				class: 'east'
			});

			this.finalsView = new Region({
				collection: this.finalsCollection,
				class: 'finals'
			});

			this.bracket = new Bracket({
				midwestView: this.midwestView,
				southView: this.southView,
				westView: this.westView,
				eastView: this.eastView,
				finalsView: this.finalsView
			});

			this.$root.append( this.bracket.el );
		},

		/////////////////////////////////
		/////////////////// DATA FETCHING
		initTabletop: function () {
			var _this = this;
			this.tabletop = Tabletop.init({
				key: '0AoFVfb01eGFHdEhXR0MwTFdtWXI5WGE3UUMyZFI0Y0E',
				callback: function () {
					_this.dataHandler(_this);
				},
				simpleSheet: true
			});
		},

		dataHandler: function () {
			var _this = this;
			_.each(_this.tabletop.sheets(), function ( sheet ) {
				// console.log('sheet ' + sheet.name.toString() + ' about to be added' );
				_this[sheet.name.toString()] = _this.createMatchesArray( sheet.name, sheet.elements, _this );
			});
		},

		createMatchesArray: function (round, data) {
			var _this = this;

			round = round.replace(' ', ''); // remove internal space

			_.each(data, function (matchData) {
				// extend matchData with the round info
				var data = _.extend({ round: round }, matchData);

				_this.allMatches.push( new Match(data) );
			});

			this.matchesToCollections();
		},

		matchesToCollections: function () {
			var _this = this;
			// make sure you have all matches for proceeding
			if(this.allMatches.length == 63){
				_.each(this.allMatches, function (matchModel) {

					if(matchModel.get('region') == 'midwest'){
						_this.midwestCollection.add(matchModel);
					}

					if(matchModel.get('region') == 'south'){
						_this.southCollection.add(matchModel);
					}

					if(matchModel.get('region') == 'west'){
						_this.westCollection.add(matchModel);
					}

					if(matchModel.get('region') == 'east'){
						_this.eastCollection.add(matchModel);
					}

					if(matchModel.get('region') == 'null'){
						_this.finalsCollection.add(matchModel);
					}

				}); // end of the each
			}
		} // end of matchesToCollection
	};


});