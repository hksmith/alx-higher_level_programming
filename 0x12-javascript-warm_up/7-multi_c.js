#!/usr/bin/node
let num;

if (isNaN(process.argv[2]) || process.argv[2] === undefined) {
  console.log('Missing number of occurrences');
} else {
  num =  parseInt(process.argv[2]);
}

for (let i = 0; i < num; i++) {
	console.log('C is fun');
}
