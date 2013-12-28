// nodeschool.io EXPRESSWORKS - exercise 6 Param Pam Pam

//INSTRUCTIONS


// Create an Express.js server that processes PUT '/message/:id' requests, 
// e.g., PUT '/message/526aa677a8ceb64569c9d4fb'

// As the response of this request return id SHA1 hashed with a date:

//   require('crypto')
//     .createHash('sha1')
//     .update(new Date().toDateString().toString() + id)
//     .digest('hex')

//SOLUTION

var express = require('express')
var crypto = require('crypto');

var app = express();

app.put('/message/:id', function(req, res) {
	var id = req.params.id;
    var hashed = crypto.createHash('sha1').update(new Date().toDateString().toString() + id).digest('hex');
    res.send(hashed);
});

app.listen(process.argv[2])
