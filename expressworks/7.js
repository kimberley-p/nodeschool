// nodeschool.io EXPRESSWORKS - exercise 7 WHat's in Query?

//INSTRUCTIONS

// Write a route that extracts data from query string in the GET '/search' URL route, e.g.,
// ?results=recent&include_tabs=true, and then transforms outputs it back to the user in JSON format.


// HINTS

// In Express.js to extract query string parameters, we can use:

//   req.query.NAME

// To output json we can use, res.send(object).

var express = require('express')

var app = express();


app.get('/search', function(req, res) {
  res.send(req.query);
})

app.listen(process.argv[2])