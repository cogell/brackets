require.config({

  paths: {
    jquery: '../../bower_components/jquery/dist/jquery',
    lodash: '../../bower_components/lodash/dist/lodash',
    tabletop: '../../bower_components/tabletop/src/tabletop',
    kinetic: '../../bower_components/kineticjs/kinetic'
  },

  shim: {
    jquery: {
      exports: '$'
    },
    lodash: {
      exports: '_'
    },
    kinetic: {
      exports: 'Kinetic'
    }
  }

});