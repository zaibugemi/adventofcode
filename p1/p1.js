const fs = require('fs');

fs.readFile('inputFile.txt', 'utf-8', (err, data) => {
	if (err) {
		console.error(err);
		return
	}
	let inputValues = data.split('\n');
	let prev = Number(inputValues[0]);
	let count = 0;
	for (let i = 1; i < inputValues.length; i++) {
		if (Number(inputValues[i]) > prev) {
			count++;
		}
		prev = inputValues[i];
	}
	console.log(`Total values: ${count}`);
})