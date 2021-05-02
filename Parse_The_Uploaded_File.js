// Include the Formidable module to be able to parse the uploaded file once it reaches the server.

// When the file is uploaded and parsed, it gets placed on a temporary folder on your computer.

var http = require('http');

var formidable = require('formidable');

http.createServer(function (req, res) {
    if (req.url == '/Upload_Files') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            res.write('File uploaded');
            res.end();
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<form action="Upoload_files"method="post"enctype="multipart/form-data">');
    }
}).listen(8080);