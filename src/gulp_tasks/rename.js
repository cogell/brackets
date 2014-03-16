var gulp = require('gulp');
var rename = require('gulp-rename');

function renameNormalize(){
	gulp.src([
		'bower_components/normalize-css/normalize.css'
		])
	.pipe( rename({ extname: '.scss'}) )
	.pipe( gulp.dest('bower_components/normalize-css') );
}

exports.task = function () {
	renameNormalize();
};