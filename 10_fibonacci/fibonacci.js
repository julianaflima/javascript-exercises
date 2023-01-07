const fibonacci = function(position) {

	let result = +position < 0 ? "OOPS" :
	+position === 0 ? 0 :
	+position === 1 ? 1 :
	fibonacci(+position - 1) + fibonacci(+position - 2);

	return result;
};

// console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
