require.config({

  paths: {
    jquery: '../../bower_components/jquery/dist/jquery',
    lodash: '../../bower_components/lodash/dist/lodash',
    tabletop: '../../bower_components/tabletop/src/tabletop',
    kinetic: '../../bower_components/kineticjs/kinetic',
    d3: '../../bower_components/d3/d3'
  },

  shim: {
    jquery: {
      exports: '$'
    },
    lodash: {
      exports: '_'
    },
    tabletop: {
      exports: 'Tabletop'
    },
    kinetic: {
      exports: 'Kinetic'
    }
  }

});