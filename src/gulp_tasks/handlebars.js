var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var declare = require('gulp-declare');
// var concat = require('gulp-concat');


exports.glob = 'static/templates/**/*.html';

exports.task = function () {
	gulp.src('static/templates/**/*.html')
	.pipe( handlebars({
		wrapped: false
	}) )
	.pipe( declare({
		namespace: 'HPC.templates'
	}) )
	.pipe( gulp.dest('static/scripts/templates') );
};