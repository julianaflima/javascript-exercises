const reverseString = function(string) {
	// Get last letter
	let letterIndex = string.length - 1;
	//console.log(letterIndex);
	let reverseOrder = '';
	for(i = letterIndex; i >= 0; i--) {
		let currentLetter = string.substr(i,1);
		//console.log(currentLetter);	
		reverseOrder += currentLetter;		
	}
	//console.log(reverseOrder);
	return reverseOrder
};


//console.log(reverseString('hello there'));

// Do not edit below this line
module.exports = reverseString;


// There's another way of doing this that turns strings into arrays

//const reverseArray = function(string) {
//	console.log(string.split('').reverse().join(''));
//}

//reverseArray('hello')
