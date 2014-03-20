var gulp = require('gulp');
var rjs = require('gulp-requirejs');

exports.task = function () {
	rjs({
				name: 'main',
        baseUrl: 'static/scripts',
        mainConfigFile: 'static/scripts/requirejs-config.js',
        out: 'main.js',
        findNestedDependencies: true
        // shim: {
        //     // standard require.js shim options
        // },
        // ... more require.js options
    })
  .pipe(gulp.dest('../dist/scripts'));
};