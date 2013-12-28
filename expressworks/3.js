// nodeschool.io EXPRESSWORKS - exercise 3 Good Old Form

//INSTRUCTIONS


// Write a route ('/form') that processes HTML form input (<form><input name="str"/
// ></form>) and prints backwards the str value.


var express = require('express')

var app = express();
app.use(express.urlencoded())

app.get('/form', function(req, res) {
  res.write('<form><input name="str"/></form>');
  res.end();
})

app.post("/form", function(req, res){
	var str = req.body.str.split('').reverse().join('');
	res.end(str);
});

app.listen(process.argv[2])

//official solution

  // var path = require('path')
  // var express = require('express')
  // var app = express()

  // app.use(express.urlencoded())

  // app.post('/form', function(req, res) {
  //   res.send(req.body.str.split('').reverse().join(''))
  // })

  // app.listen(process.argv[2])