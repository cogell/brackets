var gulp = require('gulp');

function copyImgFiles(){
	gulp.src([
		'static/images/**/*.jpg',
		'static/images/**/*.png'
		])
		.pipe( gulp.dest('../dist/images/') );
}

function copyIndexBuild(){
	gulp.src('static/index.build.html')
		.pipe( gulp.dest('../dist/') );
}

exports.task = function(){
	copyImgFiles();
	copyIndexBuild();
};