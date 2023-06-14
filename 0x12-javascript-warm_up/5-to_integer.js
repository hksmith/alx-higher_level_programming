#!/usr/bin/node
if (Number(process.argv[2]) !== NaN) {
	console.log(Number(process.argv));
} else {
	console.log('Not a number');
}
