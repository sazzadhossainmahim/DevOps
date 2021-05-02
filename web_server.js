var http = require('http');

//create a server object:

http.createServer(function (req, res) {
    res.write('hellow web server activate');//a response to the client
    res.end();

}).listen(8080);