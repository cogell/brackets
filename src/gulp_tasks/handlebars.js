var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var declare = require('gulp-declare');
var wrap = require('gulp-wrap-amd');
// var concat = require('gulp-concat');


exports.glob = 'static/templates/**/*.html';

exports.task = function () {
	gulp.src('static/templates/**/*.html')
	.pipe( handlebars({
		wrapped: true
	}) )
	// .pipe( declare({
	// 	namespace: 'templates'
	// }) )
	.pipe( wrap({
		deps: ['handlebars']
	}) )
	.pipe( gulp.dest('static/scripts/templates') );
};