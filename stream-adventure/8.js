// Stream-adventure Exercise 6 HTTP CLIENT

var request = require('request');

var input = process.stdin;
var output = process.stdout;

var r = request.post('http://localhost:8000');

input.pipe(r).pipe(output);


// official solution


    var request = require('request');
    var r = request.post('http://localhost:8000');
    process.stdin.pipe(r).pipe(process.stdout);
