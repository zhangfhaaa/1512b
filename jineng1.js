var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req,res){
	res.end(fs.readFileSync('./form.html'));
	
});
server.listen(8080);