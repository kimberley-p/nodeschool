// nodeschool.io BYTEWISER - exercise 4 Line Splitter

// INSTRUCTIONS


// The argument given to you from `process.argv[2]` will be a path to a file.

// Read this file and split it by newline characters ('\n'). You should log
// one Buffer per line.

// Bonus points if you never use `.toString()`.

// HINTS:

// Buffers have a `.slice` method that can be used to grab a sub-selection as a vie
// w (no memcpy).

// Extra bonus points if you avoid using fs.readFileSync.

var fs = require('fs');

var input = fs.readFileSync(process.argv[2]);
var offset = 0;


  for (var i = 0; i < input.length; i++) {
    if (input[i] === 10){ 
    	console.log(input.slice(offset, i));
    	i++
    	offset = i;
    }
  }
  console.log(input.slice(offset, i));
