var gulp = require('gulp');
var clean = require('gulp-clean');

exports.task = function () {
	gulp.src('../dist', {read: false})
	.pipe( clean());
};