// Stream-adventure Exercise 7 HTTP SERVER

var http = require('http');
var fs = require('fs');
var through = require('through');

var port = process.argv[2];

function onRequest(request, response) {
	if(request.method ==='POST') {
		request.pipe(tr).pipe(response);	
	}
}

// through functions

function write(data) { 
	this.queue(data.toString().toUpperCase()) 
  }
  
 function end () { 
    this.queue(null)
  }
  
var tr = through(write, end);


http.createServer(onRequest).listen(port);

