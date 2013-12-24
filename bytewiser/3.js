// nodeschool.io BYTEWISER - exercise 3 modifying buffers

// INSTRUCTIONS


// Buffers are similar to Arrays in that you can get and set values at particular o
// ffsets.

// Write a program that takes the first buffer written to `process.stdin`,
// updates all instances of . with ! and then logs out the updated buffer object.

// Bonus points if you never call `.toString()` on your buffer!

// Buffers have a `.write` method that can be used to a character to a specific off
// set.

// The integer value of the ascii character . is 46.

process.stdin.on('data', function(buff) {
  for (var i = 0; i < buff.length; i++) {
    if (buff[i] === 46) buff.write('!', i)
  }
  console.log(buff)
})