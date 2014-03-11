var connect = require('connect');

exports.task = function connectDev () {
	connect()
		.use('/bower_components', connect.static(__dirname + '/../bower_components'))
		.use(connect.static(__dirname + '/../static'))
		.listen(4000);
};