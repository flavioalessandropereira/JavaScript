//Input -> [1, 3, 4 ,6 ,80, 33, 23 ,90]
//Output -> [1, 3, 0, 0, 0, 33, 23, 0]

function substituiNumerosPares(array) {

    if (!array) return -1;
    if (!array.length) return -1;

	for (let i = 0; i < array.length; i++) {
		if (array[i] === 0) {
			console.log("Você já é 0...!");
			
		} else if (array[i] % 2 === 0)  {
			console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
		}
	}
	return array;
}

let arr = [1, 3, 4 ,6 ,80, 33, 23 ,90];
console.log(substituiNumerosPares(arr));
