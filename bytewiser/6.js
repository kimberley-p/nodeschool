// nodeschool.io BYTEWISER - exercise 6 Buffer Typed Arrays

// INSTRUCTIONS

// Typed Arrays offer another way to work with binary data. They were first added to JS
// in 2010 and have now been standardized across most browsers thanks to the WebGL
// specification for 3D programming in the browser. Typed Arrays don't have as much built-in
// functionality as Buffers in node, but they have the unique advantage of working
// in browsers.

// There are various flavors of Typed Arrays. Uint8Array is most similar to Buffer.
//  The U in Uint means 'unsigned', which is equivalent to saying 'positive integers only'.
// Int8Array, on the other hand, can store positive and negative values.

// For this challenge, read the first buffer from process.stdin, copy all bytes int
// o a Uint8Array and then log out a JSON stringified representation of the typed array


// ----------------------------------------------------------------------
// HINTS:

// Read more about Typed Arrays here:
//   http://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays

// also: JSON.stringify() FTW!

// SOLUTION

 var data = []; 

process.stdin.on('data', function(buff) {
    data.push(buff);
  })

process.stdin.on('end', function() {
var temp = Buffer.concat(data);
var output = new Uint8Array(temp);
var json = JSON.stringify(output);
 console.log(json);
})



// Getting an Uint8Array from existing data
// From an ArrayBuffer

// var myArray = new Uint8Array(myArrayBuffer);