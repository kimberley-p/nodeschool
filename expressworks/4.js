// nodeschool.io EXPRESSWORKS - exercise 4 Static

//INSTRUCTIONS


// Apply static middleware to serve index.html file without any routes. The index.h
// tml file is provided and usable via process.argv[3] value of the path to it. How
// ever, you can use your own file with this content:

//   <html>
//     <head>
//       <link rel="stylesheet" type="text/css" href="/main.css"/>
//     </head>
//     <body>
//       <p>I am red!</p>
//     </body>
//   </html>

// -----------------------------

// HINTS

// This you someone can call static middleware:

//   app.use(express.static(path.join(__dirname, 'public')));

// For this exercise ExpressWorks will pass you the path:

//   app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

var express = require('express')
var path = require('path')

var app = express();

app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2])