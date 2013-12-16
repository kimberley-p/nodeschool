// Stream adventure exercise 4 - Transform
var through = require('through')



function write(data) { 
	this.queue(data.toString().toUpperCase()) 
  }
  
 function end () { 
    this.queue(null)
  }
  
var tr = through(write, end);

process.stdin.pipe(tr).pipe(process.stdout);
