// Stream adventure exercise 5 - Lines

var split = require('split')
var through = require('through')

var results = process.stdin.pipe(split());

var odd = true;

function write(data) { 
	if (odd) {
		this.queue(data.toString().toLowerCase() + '\n') 
	} else {
		this.queue(data.toString().toUpperCase() + '\n')
	}
	odd = !odd
  }
  
 function end () { 
    this.queue(null)
  }
  
var tr = through(write, end);

results.pipe(tr).pipe(process.stdout);

