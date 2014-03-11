require.config({

  paths: {
    jquery: '/jquery/dist/jquery',
    lodash: '/lodash/dist/lodash',
    tabletop: '/tabletop/src/tabletop',
    kinetic: '/kineticjs/kinetic'
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