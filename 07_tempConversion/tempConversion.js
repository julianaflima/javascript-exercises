const convertToCelsius = function(fahrenheit) {
	return Math.round(((fahrenheit - 32) * (5/9)) * 10) / 10;
};

//console.log(convertToCelsius(64));

const convertToFahrenheit = function(celsius) {
	return Math.round((celsius * (9/5) + 32) * 10) / 10
};

console.log(convertToFahrenheit(17));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
