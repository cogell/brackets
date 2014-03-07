var gulp = require('gulp');
var concat = require('gulp-concat');

var filesToCombine = [
	'bower_components/jquery/dist/jquery.js',
	// 'bower_components/lodash/dist/lodash.js',
	// 'bower_components/handlebars/handlebars.runtime.js',

	'static/scripts/templates/*.js',

	'static/scripts/main.js'
];

module.exports = {
	glob: filesToCombine,

	task: function () {
		// return this task's stream so we can tie in livereloading
		return gulp.src( filesToCombine )
			.pipe( concat('main.js') )
			.pipe( gulp.dest('../dist/js') );
	}
};