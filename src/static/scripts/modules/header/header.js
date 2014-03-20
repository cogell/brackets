define(function (require) {
	var BaseView = require('BaseView');
	var _header = require('templates/header');

	return BaseView.extend({
		tagName: 'header',
		template: _header,
		events: {
			'click .map': 'mapClicked',
			'click .facebook': 'fbClicked',
			'click .twitter': 'twitClicked'
		},

		initialize: function () {
			BaseView.prototype.initialize.call(this);
			this.loadFBsdk();
			this.render();
		},

		setHeader: function (text) {
			this.$el.find('.title').text(text);
		},

		setMap: function (text) {
			this.$el.find('.map-wrapper').attr('class', 'map-wrapper ' + text);
		},

		mapClicked: function () {
			this.trigger('map:clicked');
			this.setHeader('NCAA 2014 Tournament');
			this.$el.find('.map-wrapper').attr('class', 'map-wrapper');
		},

		twitClicked: function () {
			var baseUrl = 'https://twitter.com/share?';
			var url = '&url=' + encodeURIComponent(window.location.href);
			var text = '&text=' + encodeURIComponent('some text');
			var hashtags = '&hashtags=' + 'ncaa,marchMadness';
			var twitterURL = baseUrl + url + text + hashtags;
      window.open(twitterURL, 'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=300,height=300');
		},

		fbClicked: function () {
			console.log('fbClicked fired');
      FB.ui({
        method: 'feed',
        name: 'NCAA 2014 Tournament',
        picture: 'http://labs-march-psychopathy.s3-website-us-west-2.amazonaws.com/images/social.png',
        link: window.location.href,
        caption: 'caption text',
        description: 'description text',
      },
      function(response) {
        if (response && response.post_id) {
          console.log('FB bracket post was published.');
        } else {
					console.log('Post was not published.');
				}
      });
    },

		loadFBsdk: function () {
			window.fbAsyncInit = function() {
        FB.init({
          appId      : '1427100424195799',
          status     : true,
          xfbml      : true
        });
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "//connect.facebook.net/en_US/all.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
		}

	});

});