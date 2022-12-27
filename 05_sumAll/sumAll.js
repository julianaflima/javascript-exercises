const sumAll = function(num1, num2) {
	if (typeof num1 !== `number` || typeof num2 !== `number`) return `ERROR`;

	let sum = 0;
	let minNum = Math.min(num1, num2);
	let maxNum = Math.max(num1, num2);

	if (minNum < 0) return `ERROR`;

	for (let i = minNum; i <= maxNum; i++) {
		sum += i;
	}
	return sum;
};


//console.log(sumAll(1,5));

// Do not edit below this line
module.exports = sumAll;
