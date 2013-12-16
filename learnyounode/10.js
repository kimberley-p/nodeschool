// Exercise 10 - Time server

var net = require('net');
var moment = require('moment');

var date = moment().format("YYYY-MM-DD hh:mm\n");

var server = net.createServer(function(socket) { //'connection' listener
	socket.write(date + '\n');
  	socket.end();
});
server.listen(8000);