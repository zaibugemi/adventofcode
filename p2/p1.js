const fs = require('fs');

function readFilePromise(filename) {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, 'utf-8', (err, data) => {
			if (err) reject (err);
			resolve(data);
		})
	})
}

(async function () { //took the opportunity to write the asynchronous code using async/await syntax
	try {
		let data = await readFilePromise('inputFile.txt');
		let dataValues = data.split('\n').map((datapoint) => {
			return datapoint.split(' ');
		});

		let horizontalPosition = 0;
		let depth = 0;
		let movement, units;
		for (let value of dataValues) {
			movement = value[0];
			units = Number(value[1]);

			switch(movement) {
				case 'forward':
					horizontalPosition+=units
					break
				case 'up':
					depth-=units
					break
				case 'down':
					depth+=units
					break
			}
		}
		console.log(horizontalPosition * depth);
	} catch(err) {
		console.log('Error: ', err);
	}
})();
