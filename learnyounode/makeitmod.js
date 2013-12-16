// //MAKE IT MODULAR

// var fs = require('fs');

// var result = [];

// function makeitmod(directory, extn, callback) {
// 	var list = fs.readdir(directory, function(err, data) {
// 		if (err){
// 			return callback(err);
// 		} else {
// 		 	var filter = new RegExp(extn);
// 	    	for(var i=0; i<data.length; i++){
// 	        	if(data[i].match(filter)){
// 	            	//console.log(data[i]);
// 	            	result.push(data[i]);
// 	        	}
// 	    	}
// 		}
// 		return callback(result);
// 	})	
// }
// module.exports = makeitmod;


//official solution

var fs = require('fs')

module.exports = function(dirname, filter, callback) {
var regex = new RegExp('\\.' + filter + '$')    

var filelist = new Array()
var i = 0

fs.readdir(dirname, function (err, list) {

    if (err) {
    return callback(err);
    }
    else list.forEach(function (file) {
    if (regex.test(file))
        filelist[i] = file;
        i += 1;
    })
    return callback(null, filelist)

})

};