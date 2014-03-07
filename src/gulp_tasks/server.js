// var gulp = require('gulp');
var connect = require('connect');

function runEnvTask () {
	connectDev();
}

function connectDev () {
	connect()
		.use(connect.static('bower_components'))
		.use(connect.static('static'))
		.listen(4000);
}

exports.task = function() {
	console.log('starting simple server on localhost:4000');
	runEnvTask();
};