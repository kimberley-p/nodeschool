// nodeschool.io EXPRESSWORKS - exercise 5 Stylish CSS

//INSTRUCTIONS


// Style your HTML from previous example with some Stylus middleware. The path to main.styl 
// file is provided in process.argv[3] 


var express = require('express')
var path = require('path')
var stylus = require('stylus')

var app = express();

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
app.use(stylus.middleware(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2])

//OFFICIAL SOLUTION


  // var path = require('path')
  // var express = require('express')
  // var app = express()

  // app.use(require('stylus').middleware(process.argv[3]));
  // app.use(express.static(process.argv[3]));


  // app.listen(process.argv[2])