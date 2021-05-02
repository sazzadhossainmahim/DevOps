var events = require('events');

var eventEmitter = new events.EventEmitter();

// Create an evenet handler:
var myEvenHandler = function () {
    console.log('I have a scream!');
}

// Assign the event handler to an 
eventEmitter.on('scream', myEvenHandler);

// Fire the 'scream' event:
eventEmitter.emit('scream');