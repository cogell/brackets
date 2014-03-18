require.config({

  paths: {
    jquery: '../../bower_components/jquery/dist/jquery',
    underscore: '../../bower_components/underscore/underscore',
    tabletop: '../../bower_components/tabletop/src/tabletop',
    kinetic: '../../bower_components/kineticjs/kinetic',
    d3: '../../bower_components/d3/d3',
    backbone: '../../bower_components/backbone/backbone',
    handlebars: '../../bower_components/handlebars/handlebars.runtime',
    fittext: '../../bower_components/FitText.js/jquery.fittext',

    BaseView: 'common/baseView',
    pubsub: 'common/pubsub'
  },

  shim: {
    jquery: {
      exports: '$'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    handlebars: {
      exports: 'Handlebars'
    },
    tabletop: {
      exports: 'Tabletop'
    },
    kinetic: {
      exports: 'Kinetic'
    },
    d3: {
      exports: 'd3'
    },
    fittext: {
      deps: ['jquery']
    }

  }

});