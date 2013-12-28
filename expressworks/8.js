// nodeschool.io EXPRESSWORKS - exercise 8 jSON ME

//INSTRUCTIONS


// Write a server that reads a file (file name is passed in process.argv[3]), parses 
// it to JSON and outputs the content to the user with res.json(object). Everything 
// should match to the 'books' resource.


// HINTS

// For reading, there's an fs module, e.g.,

//   fs.readFile(filename, callback)

// While the parsing can be done with JSON.parse:

//   object = JSON.parse(string)

//SOLUTION

var express = require('express')
var fs = require('fs')

var app = express();

app.get('/books', function(req, res){
  fs.readFile(process.argv[3], 'utf8', function (err, data) {
  res.send(JSON.parse(data))
});
});


app.listen(process.argv[2])

// OFFICIAL SOLUTION


  // var path = require('path')
  // var express = require('express')
  // var app = express()
  // var fs = require('fs')

  // app.get('/books', function(req, res){
  //   var filename = process.argv[3]
  //   fs.readFile(filename, function(e, data) {
  //     if (e) return res.send(500)
  //     try {
  //       books = JSON.parse(data)
  //     } catch (e) {
  //       res.send(500)
  //     }
  //     res.json(books)
  //   })
  // })

  // app.listen(process.argv[2])