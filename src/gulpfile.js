var gulp = require('gulp');
var gutil = require('gulp-util');
var livereload = require('gulp-livereload');

var server = require('./gulp_tasks/server');
var sass = require('./gulp_tasks/sass');
var handlebars = require('./gulp_tasks/handlebars');
var concat = require('./gulp_tasks/concat');
var uglify = require('./gulp_tasks/uglify');
var lr = require('./gulp_tasks/lr-server');
var copy = require('./gulp_tasks/copy');
var clean = require('./gulp_tasks/clean');


gulp.task('server', server.task);
gulp.task('sass', function () {
	sass.task().pipe( livereload(lr.server) );
});
gulp.task('handlebars', handlebars.task);
gulp.task('concat', concat.task);
gulp.task('clean', clean.task);
gulp.task('uglify', uglify.task);
gulp.task('copy', copy.task);
gulp.task('lr-server', lr.start);


gulp.task('build', function() {
	gutil.env.production = true;
	gulp.run('clean', 'copy', 'sass', 'concat');
});

gulp.task('start', function(){
	gulp.run('server', 'lr-server', 'sass', 'handlebars');

	gulp.watch(sass.glob, function () {
		gulp.run('sass');
	});

	gulp.watch(handlebars.glob, function () {
		gulp.run('handlebars');
	});

});

gulp.task('default', function(){
  gulp.run('start');
});