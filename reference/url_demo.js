const url = require('url');

const myUrl = new URL(
	'http://mywebsite.com:8000/hello.html?id=100&status=active'
);

//serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host  root domain
console.log(myUrl.host);

// Host  root domain // does not get port name
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query, i.e. everything after the question mark in the URL
console.log(myUrl.search);

// Search params object
console.log(myUrl.searchParams);

// Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// special, loop through params!
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
