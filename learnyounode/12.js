//exercise 12 - HTTP Uppercaser

var http = require('http');
var map = require('through2-map');


function onRequest(request, response) {
	//carry out only for requests of type POST
	if (request.method != 'POST') {
		return response.end('send me a post!')
	}
	else {
		//use through map to uppercase the request and the pipe it to the response
		request.pipe(map(function (chunk) { 
		return chunk.toString().toUpperCase();
		})).pipe(response);
	}
}

http.createServer(onRequest).listen(8000);