const palindromes = function (string) {
	let stringForwards = getForwards(string);
	let stringBackwards = getBackwards(string);

	let result = (stringForwards === stringBackwards) ? true : false;
	return result;
};


function filterLetters(character) {
	let resultChar = (character.toLowerCase() !== character.toUpperCase()) ? 
		character.toLowerCase() : '';
	return resultChar;
}


function getForwards(string) {
	let stringForwards = ''; 

	for (let i = 0; i <= string.length - 1; i++) {
		stringForwards += filterLetters(string.charAt(i));
	}
	return stringForwards;
}


function getBackwards (string) {
	let stringBackwards = ''; 

	for (let i = string.length - 1; i >= 0; i--) {
		stringBackwards += filterLetters(string.charAt(i));
	}
	return stringBackwards;
}



// Do not edit below this line
module.exports = palindromes;
