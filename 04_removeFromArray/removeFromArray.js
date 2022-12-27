const removeFromArray = function(array, ...valueRemove) {
	let argLength = valueRemove.length - 1;

	for (let i = 0; i <= argLength; i++) {
		// Check if value is in the array
		let checkValue = value => value === valueRemove[i];

		if (array.find(checkValue) !== undefined) {
			// Find index of the value in the array
			let index = array.findIndex(checkValue);

			// Remove value with the index determined before
			array.splice(index, 1);
		}
	}
	return array;
};

//console.log(removeFromArray([1, 2, 3, 4, 'yay'], 0));


// Do not edit below this line
module.exports = removeFromArray;
