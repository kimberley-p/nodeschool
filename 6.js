// //MAKE IT MODULAR

// var	makeitmod = require('./makeitmod.js');

// var directory = process.argv[2];
// var extn = "\\." + process.argv[3];

// makeitmod(directory, extn, function(err, data){
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data.join('\n')); 
// });

//official solution

var mymodule = require('./makeitmod.js')

var dir = process.argv[2]
var ext = process.argv[3]

mymodule(dir, ext, function(err, list) {
  if (err) {
   throw err;
  }
  else list.forEach(function (file) {
   console.log(file);
  })
});