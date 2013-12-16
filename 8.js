//http client
var http = require('http');

//variables

var url = process.argv[2]
var total = "";

http.get(url, function(response) {
	//console.log(url);
	response.setEncoding('utf8');
	response.on('data', function(data){
		total = total.concat(data);
	});
	response.on('end', function () {
		console.log(total.length);
		console.log(total);

	})
});
