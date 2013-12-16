// Exercise 11 - HTTP Server

var http = require('http');
var fs = require('fs');

var file = process.argv[2];

var filecontents = fs.createReadStream(file);

function onRequest(request, response) {
	//pipe the contens of the file to the response object
	filecontents.pipe(response);
	console.log(response);
}


http.createServer(onRequest).listen(8000);
