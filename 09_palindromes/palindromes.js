const palindromes = function (string) {
	let stringForwads = '';
	let stringBackwards = '';

	for (let i = string.length - 1; i >= 0; i--) {
		stringBackwards = (string.charAt(i) !== '' && 
			string.charAt(i).toLowerCase() !== string.charAt(i).toUpperCase()) ? 
			stringBackwards += string.charAt(i).toLowerCase() : stringBackwards;

		// stringForwards = removeNonLetters(string.charAt(i));
	}

	for (let i = 0; i <= string.length - 1; i++) {
		stringForwads = (string.charAt(i) !== '' && 
			string.charAt(i).toLowerCase() !== string.charAt(i).toUpperCase()) ?
			stringForwads += string.charAt(i).toLowerCase() :
			stringForwads;	
	}

	// console.log(stringForwads);
	// console.log(stringBackwards);
	
	let result = (stringForwads === stringBackwards) ? true : false;
	return result;


};

// function removeNonLetters(character) {
// 	if (character !== '' && character.toLowerCase() !== character.toUpperCase) {
// 		return character;
// 	}
// }

// console.log(removeNonLetters(''))

// palindromes('Ab');

// console.log(palindromes('Rats live on no evil star.'));

// Do not edit below this line
module.exports = palindromes;
