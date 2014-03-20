var gulp = require('gulp');

function copyImgFiles(){
	gulp.src([
		'static/images/**/*.jpg',
		'static/images/**/*.png',
		'static/images/**/*.svg'
		])
		.pipe( gulp.dest('../dist/images') );
}

function copyRequireJS(){
	gulp.src([
		'bower_components/almond/almond.js'
		])
		.pipe( gulp.dest('../dist/scripts') );
}

function copyFonts () {
	gulp.src([
		'static/fonts/**/*.eot',
		'static/fonts/**/*.svg',
		'static/fonts/**/*.ttf',
		'static/fonts/**/*.woff'
		])
		.pipe( gulp.dest('../dist/fonts') );
}

function copyIndexBuild(){
	gulp.src('static/index.build.html')
		.pipe( gulp.dest('../dist') );
}

exports.task = function(){
	copyImgFiles();
	copyRequireJS();
	copyFonts();
	copyIndexBuild();
};