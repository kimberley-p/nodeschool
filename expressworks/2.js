// nodeschool.io EXPRESSWORKS - exercise 2 Jade

//INSTRUCTIONS

// Create an Express.js app with a home page (/home) rendered by jade template engi
// ne, that shows current date (toDateString).

// -----------------------------

// SOLUTION

var express = require('express');
var jade = require('jade');

var app = express();

// Configuring Express.js
app.set('view engine', 'jade')
app.set('views', process.argv[3])

// app
app.get('/home', function(req, res) {
	//res.render function accepts filename and data
  res.render('index', {date: new Date().toDateString()})
})

app.listen(process.argv[2])
