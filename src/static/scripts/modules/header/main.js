define(function (require) {
	var pubsub = require('pubsub');
	var Header = require('modules/header/header');

	return {
		pubsub: pubsub,

		main: function ($root) {
			this.setAPI();
			this.initView($root);
		},

		initView: function ($root) {
			this.view = new Header();
			this.setViewHandlers();
			$root.append( this.view.el );
		},
		setViewHandlers: function () {
			var _this = this;
			this.view.on('map:clicked', function () {
				_this.pubsub.trigger('map:clicked');
			});
		},

		setHeader: function ( text ) {
			this.view.setHeader( text );
		},

		setMap: function ( text ) {
			this.view.setMap( text );
		},

		regionClicked: function( text ){
			this.setHeader(text);
			this.setMap(text);
		},

		windowResized: function () {
			if(this.pubsub.windowWidth >= 900){
				this.setHeader('NCAA 2014 Tournament');
			}
		},

		setAPI: function () {
			this.pubsub.on( 'setHeader', this.setHeader, this );
			this.pubsub.on( 'region:clicked', this.regionClicked, this);
			this.pubsub.on( 'window:resized', this.windowResized, this);
		}
	};

});