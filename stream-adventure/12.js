// Stream-adventure Exercise 12 SECRETZ

//dependencies
var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');

//objects
var input = process.stdin;
var cipher = process.argv[2];
var pass = process.argv[3];
var decipher = crypto.createDecipher(cipher, pass);

//parsing data (check if 'File', if it is, create md5 hash and print it with a space, its path and a newline)
var parser = tar.Parse();
parser.on('entry', function(e) {
	if(e.type !== 'File') return
		var md5 = crypto.createHash('md5')
	e.on('data', function(chunk) {
		md5.update(chunk)
	})
	e.on('end', function() {
		console.log(md5.digest('hex') + ' ' + e.path)
	})
});

// input -> decipher it -> unzip it -> parse (check if 'File', hash it and print it with a space and newline)
input.pipe(decipher).pipe(zlib.createGunzip()).pipe(parser)

//official solution 

    // var crypto = require('crypto');
    // var tar = require('tar');
    // var zlib = require('zlib');
    // var through = require('through');

    // ******TODO - parsing uses 'through' and none of the emits - work out what the fuck it's doing here

    // var parser = tar.Parse();
    // parser.on('entry', function (e) {
    //     if (e.type !== 'File') return;

    //     var h = crypto.createHash('md5', { encoding: 'hex' });
    //     e.pipe(h).pipe(through(null, end)).pipe(process.stdout);

    //     function end () { this.queue(' ' + e.path + '\n') }
    // });

	// *****

    // var cipher = process.argv[2];
    // var pw = process.argv[3];
    // process.stdin
    //     .pipe(crypto.createDecipher(cipher, pw))
    //     .pipe(zlib.createGunzip())
    //     .pipe(parser)
    // ;

