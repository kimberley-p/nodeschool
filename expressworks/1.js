// nodeschool.io EXPRESSWORKS - exercise 1 

//INSTRUCTIONS

// Create an Express.js app that runs on localhost:3000, and outputs "Hello World!"
//  when somebody goes to root '/home'.
// process.argv[2] will be provided by expressworks to you, this is the port number

// SOLUTION

var express = require('express')

var app = express();
app.get('/home', function(req, res) {
  res.end('Hello World!')
})

app.listen(process.argv[2])


