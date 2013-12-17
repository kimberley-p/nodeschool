// Stream-adventure Exercise 10 HTML STREAM

var trumpet = require('trumpet');
var through = require('through');

var input = process.stdin;

var tr = trumpet();
var stream = tr.select('.loud').createStream();

function write(data) { 
	this.queue((data+'').toUpperCase()) 
  }
  
 function end () { 
    this.queue(null)
  }
  
var thr = through(write, end);


stream.pipe(thr).pipe(stream);
input.pipe(tr).pipe(process.stdout)