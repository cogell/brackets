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
			this.setAPI();
			this.createRegionCollections();
			this.createViews();
			this.addViewsHanlders();

			this.pubsub.trigger('bracket:loading');
			this.fetchData();
			this.pubsub.trigger('bracket:loaded');
		},

		setAPI: function () {
			this.pubsub.on('region:clicked', this.regionClicked, this);
			this.pubsub.on('map:clicked', this.mapClicked, this);

			this.pubsub.on('popup:opened', this.popupOpened, this);
			this.pubsub.on('popup:closed', this.popupClosed, this);

			this.pubsub.on('bracket:loading', this.bracketLoading, this);
			this.pubsub.on('bracket:loaded', this.bracketLoaded, this);
		},

		popupOpened: function () {
			this.bracket.dim();
		},

		popupClosed: function () {
			this.bracket.undim();
		},

		bracketLoading: function () {
			this.bracket.loading();
		},

		bracketLoaded: function () {
			this.bracket.loaded();
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

		addViewsHanlders: function () {
			var _this = this;
			this.bracket.on('bracket:clicked', function () {
				_this.pubsub.trigger('bracket:clicked');
			});
		},

		/////////////////////////////////
		/////////////////// DATA FETCHING
		fetchData: function () {
			var _this = this;
			var randomString = this.randomString();
			$.ajax({
				type:'GET',
				crossDomain: true,
				url: '//labs-march-psychopathy.s3.amazonaws.com/bracket.json?'+randomString,
				// contentType: 'application/json',
				// dataType: 'jsonp',
				// jsonpCallback: 'content1234',
				success: function (data) {
					console.log('data', data);
					_this.dataHandler(data);
				},
				error: function (err) {
					console.log('error', err);
				}
			});
		},

		dataHandler: function (data) {
			var _this = this;
			_.each(data, function ( sheet, key ) {
				console.log('sheet, key', sheet, key);
				// console.log('sheet ' + sheet.name.toString() + ' about to be added' );
				_this[key.toString()] = _this.createMatchesArray( key, sheet.row, _this );
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
						console.log('_this.midwestCollection.length', _this.midwestCollection.length);
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
		}, // end of matchesToCollection

		randomString: function () {
	    var text = '';
	    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	    for( var i=0; i < 5; i++ )
	        text += possible.charAt(Math.floor(Math.random() * possible.length));

	    return text;
		}
	};


});