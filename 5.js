//filtered ls

var fs = require('fs');

var directory = process.argv[2];
var extn = "\\." + process.argv[3];

var list = fs.readdir(directory, function(err, list) {
	 var filter = new RegExp(extn);
    for(var i=0; i<list.length; i++){
        if(list[i].match(filter)){
            console.log(list[i]);
        }
    }
})
