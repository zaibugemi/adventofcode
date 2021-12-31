const fs = require('fs');

function readFilePromise(filename) {
	return new Promise((res, rej) => {
		fs.readFile(filename, 'utf-8', (err, data) => {
			if (data) res(data);
			rej(err);
		})
	})
}

(async () => {
	try{
		let data = await readFilePromise('inputFile.txt');
		data = data.split('\n');
		let digitsLength = data[0].length;

		let accumulator = Array(digitsLength).fill(0); 

		data.forEach(value => {
			[...value].forEach((bit, bitIndex) => {
				Number(bit) == 1 ? (accumulator[bitIndex] += 1) : (accumulator[bitIndex] -= 1);
			})
		})

		let gammaRate = '';
		let epsilon = '';
		accumulator.forEach( bit => {
			(bit < 0) ? (gammaRate+=0, epsilon+=1) : (gammaRate+=1, epsilon+=0);
		});

		let gammaRateInt = 0;
		let epsilonInt = 0;
		let highestPower = digitsLength - 1;
		[...gammaRate].forEach((bit, bitIndex) => {
			gammaRateInt+= (2**(highestPower - bitIndex)) * Number(bit);
		});

		[...epsilon].forEach((bit, bitIndex) => {
			epsilonInt+= (2**(highestPower - bitIndex)) * Number(bit);	
		});
		
		console.log('Power: ', gammaRateInt * epsilonInt);


	}catch(error){
		console.log("error");
	}
})();