    var fs = require('fs');
    
    var file = fs.readFileSync(process.argv[2]);
    var toString = file.toString();
    var split = toString.split('\n');
    
console.log(split.length - 1);
