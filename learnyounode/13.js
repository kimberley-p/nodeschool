//exercise 13 - HTTP JSON API Server

var http = require('http');
var url = require('url');

//function to take iso time and trun it into specified JSON format
function isoToHourMinSec(date) {
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds(),
  }
}

//function to take iso time and turn it into unix
function isoToUnix(date) {
  return {
    unixtime: date.getTime()
  }
}

// route the url to the correct function
var router = {
  '/api/parsetime': isoToHourMinSec,
  '/api/unixtime': isoToUnix,
}

function onRequest(request, response) {
	var urlPath = url.parse(request.url, true);
	var route = router[urlPath.pathname];

	if(!route || !urlPath.query || !urlPath.query.iso) {
		response.writeHead(404, {'Content-Type': 'application/json'})
    	return response.end('{error:"no such route"}')
	}
	 else {
	 	var date = new Date(urlPath.query.iso)
  		var result = route(date)

  		response.writeHead(200, {'Content-Type': 'application/json'})
  		response.end(JSON.stringify(result))
	}
}

http.createServer(onRequest).listen(8000);

//official solution


//  var http = require('http')
//  var url = require('url')

//  function parsetime (time) {
//    return {
//      hour: time.getHours(),
//      minute: time.getMinutes(),
//      second: time.getSeconds()
//    }
//  }

//  function unixtime (time) {
//    return { unixtime : time.getTime() }
//  }

//  var server = http.createServer(function (req, res) {
//    var parsedUrl = url.parse(req.url, true)
//    var time = new Date(parsedUrl.query.iso)
//    var result

//    if (/^\/api\/parsetime/.test(req.url))
//      result = parsetime(time)
//    else if (/^\/api\/unixtime/.test(req.url))
//      result = unixtime(time)

//    if (result) {
//      res.writeHead(200, { 'Content-Type': 'application/json' })
//      res.end(JSON.stringify(result))
//    } else {
//      res.writeHead(404)
//      res.end()
//    }
//  })
//  server.listen(8001)

// ----------------------------------------------------------------