var gulp = require('gulp');
var uglify = require('gulp-uglify');

exports.task = function () {
	gulp.src('../dist/js/main.js')
	.pipe( uglify() )
	.pipe( gulp.dest('../dist/js/') );
};