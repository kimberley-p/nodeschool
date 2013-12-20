// nodeschool.io BYTEWISER - exercise 1 Buffer From String

//INSTRUCTIONS
// In Node.js, `Buffer` is a global object that provides a way to work with differe
// nt
// kinds of binary data. Most APIs in Node core (e.g. http, net, fs) will give you
// buffers, and will be able to do their job faster if you give them buffers.

// For this challenge, write a node program that prints a buffer object containing
// the string "bytewiser" using console.log.


var buf  = new Buffer("bytewiser");
console.log(buf);