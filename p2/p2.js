const fs = require('fs');

fs.readFile('../p1/inputFile.txt', 'utf-8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	const GROUP = 3;
	let inputValues = data.split('\n'). //converting to Integers
		map(function(ele){
			return Number(ele);
		})
	let prev = inputValues.slice(0,GROUP). //sum of first three numbers
		reduce(function(total, ele){
			return total + ele;
		}, 0);
	
	let toBeSubtracted;
	let tripleSum;
	let count = 0;
	for (let i = GROUP; i < inputValues.length; i++){
		toBeSubtracted = inputValues[i-3];
		tripleSum = prev - toBeSubtracted + inputValues[i];
		if (tripleSum > prev){
			count++;
		}
		prev = tripleSum;
	}
	console.log(`Total values: ${count}`);
})