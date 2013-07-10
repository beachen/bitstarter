var express = require('express');
var fs = require ('fs')

var app = express.createServer(express.logger());

app.get('/', function(request, response)
{
    // Do stuff..
    var  file= fs.readFileSync('index.html', 'utf-8');
    {
	response.send(file);
    }
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
