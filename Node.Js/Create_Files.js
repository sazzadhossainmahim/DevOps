//Create Files 
var fs = require('fs');

fs.appendFile('mynewfile.txt', 'Hellow ', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

var fsx = require('fsx');

//create an empty file named my newfile2.txt:

fs.open('mynewfile2.txt','w',function(err,file){
    if(err)throw err;
    console.log('Saved! an empty file');
});

// Create a new, empty file using the open() method:

var file_open = require('file_open');

file_open.open('mynewfile3.txt','w',function(err,file){
    if(err) throw err;
    console.log('Saved! empty file');
});

// Create a new file using the writeFile() method:
