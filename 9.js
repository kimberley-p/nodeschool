// Juggling async

var http = require('http');

//VARIABLES

//an empty array to hold the incoming data after each loop
var holder = [];

//an counter to keep track of how many loops have ben made
var endCount = 0;

// the processing function to be used in the for loop

function processing(index){
	 http.get(process.argv[index], function(response) {
		
		response.setEncoding('utf8');
		//an empty string to fill with the concatonated data chunks
		var string = '';


		response.on('data', function(data){
			string += data;
		});

		//if is the last (third) loop, print all three strings
		response.on('end', function () {
			holder[index] = string;
			endCount++;
			if(endCount >= 3) {
				for(var i in holder){
                        console.log(holder[i]); 
                    }
	}
		})
	});
}


// the for loop

for (var i = 2; i < 5; i++) {
  processing(i)
}

//OFFICIAL SOLUTION

// var http = require('http')
// var bl - require('bl')
// var results = []
// var count = 0

//function printResults () {
//	for (var i=0; i <3; i++) {
// 		console.log(results[i])
// 	}
// }

// function httpGet(index) {
// 	http.get(process.argv[2 + index], function (response) {
// 		response.pipe(bl(function(err, data) {
// 			if(err)
// 			return console.error(data
// 		results[index] = data.tostring()
// 		count++

// 		if (count == 3) //yay! we are at the last one!
// 			prinResults()
// 		}))
		
// 	})
// }

// for (var i=0; i<3;i++)
// httpGet(i)

