let newString;

const repeatString = function(string, times) {
	newString = '';
	if (times < 0) return `ERROR`;
	for (let i = 0; i < times; i++) {
		newString += string;
	}
	return newString;
};



// Do not edit below this line
module.exports = repeatString;
