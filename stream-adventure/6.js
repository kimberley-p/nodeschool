
var concat = require('concat-stream');
var http = require('http');

var input = process.stdin;

function output(body) {
	var reverse = (body + "").split("").reverse().join("");
	console.log(reverse);
}

input.pipe(concat(output));

// Official solution

// var concat = require('concat-stream');

// process.stdin.pipe(concat(function (src) {
// 	var s = src.toString().split('').reverse().join('')log;
// 	console.log(s);
// }));
