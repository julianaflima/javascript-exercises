const leapYears = function(year) {
	// Return true when year is divisible by 4 AND (it's either not divisible by 100 or it is divisible by 400) -- so it excludes years that are divisible by 4 and by 100 but not by 400
	return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};


console.log(leapYears(2000));

// Do not edit below this line
module.exports = leapYears;


//Leap years are years divisible by four (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). (Yes, it's all pretty confusing)

//year divisible by 100 is not leap OR year is divisible by 400
// year % 100 === 0 is not leap || year % 400 === 0
// year divisible by 4 && by 100 $$ not by 400 are not leap years 

ANOTHER WAY:

	if (year % 4 === 0) {
		if (year % 100 === 0 && year % 400 !== 0)
			return false;
		else {
			return true;
		}

	} else {
		return false
	}	