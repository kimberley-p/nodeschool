// nodeschool.io BYTEWISER - exercise 2 Hexadecimal Encoding

//INSTRUCTIONS


// You can convert data between different representations, also known as
// encodings, using Buffers.

// Write a node program that takes the following 6 bytes, converts them to a
// hexidecimal string using a Buffer and logs them to the console.

//     0 15 24 3 250 83

// Hexadecimal encoding is a way of representing integers 0 through 16
// using the 10 digits 0 - 9 and 6 letters a - f.

// A single hexidecimal octet is two hex characters long, which can represent
// a number between 0 and 255 (16 * 16 possibilities).

// For example, the number 255 in hex is ff, as f is 15 in hex. Sometimes hex
// values are written with a 0x prefix, so you might see 255 written as 0xff

 var buf = new Buffer([0, 15, 24, 3, 250, 83]);
 var output = buf.toString('hex', 0, buf.length);
 console.log(output);
