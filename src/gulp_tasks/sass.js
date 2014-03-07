var gulp = require('gulp');
var sass = require('gulp-sass');
var gutil = require('gulp-util');

var dest = '';

function setEnviromentVariables( cb ){

	if (gutil.env.production){
		dest = '../dist/styles/';
	} else {
		dest = 'static/styles/';
	}

	// execute callback
	return cb();
}

function runSass(){
	console.log('dest', dest);
	return gulp.src( 'static/styles/main.scss' )
	.pipe( sass({
		// includes: ['app/styles']
	}) )
	.pipe( gulp.dest( dest ) );
}

exports.glob = 'static/styles/**/*.scss';

exports.task = function () {
	return setEnviromentVariables( runSass );
};