// Stream-adventure Exercise 11 CRYPT
var crypto = require('crypto');

var pass = process.argv[2];
var data = process.stdin;
var stream = crypto.createDecipher('aes256', pass);

data.pipe(stream).pipe(process.stdout);