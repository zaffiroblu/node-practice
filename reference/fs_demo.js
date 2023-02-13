const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
// 	if (err) throw err;
// 	console.log('Folder created!');
// });

// Create and write to file + add more with fileAppend
// fs.writeFile(
// 	path.join(__dirname, '/test', 'hello.txt'),
// 	'Hello, World!',
// 	(err) => {
// 		if (err) throw err;
// 		console.log('File written to!');
// 		// File append
// 		fs.appendFile(
// 			path.join(__dirname, '/test', 'hello.txt'),
// 			' I love node.JS!',
// 			(err) => {
// 				if (err) throw err;
// 				console.log('File written to!');
// 			}
// 		);
// 	}
// );

// Read file
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
	if (err) throw err;
	console.log(data);
});

// Rename file
fs.rename(
	path.join(__dirname, '/test', 'hello.txt'),
	path.join(__dirname, '/test', 'helloWorld.txt'),
	(err) => {
		if (err) throw err;
		console.log('File renamed!');
	}
);
