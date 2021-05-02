var fs = require('fs');
fs.rename('mynewfile', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });

