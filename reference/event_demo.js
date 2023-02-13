const EventEmitter = require('events');

// Create class
class myEmitter extends EventEmitter {}

// Init object
const myEmitterObject = new myEmitter();

// Event listener
myEmitterObject.on('event', () => console.log('Event fired!'));

// Init event
myEmitterObject.emit('event');
myEmitterObject.emit('event');
myEmitterObject.emit('event');
myEmitterObject.emit('event');
myEmitterObject.emit('event');
