#!/usr/bin/node
if (Number(process.argv) !== NaN) {
	console.log(Number(process.argv));
} else {
	console.log('Not a number');
}
