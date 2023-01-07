const findTheOldest = function(array) {
	return array.reduce((oldest, current) => getAge(oldest) > getAge(current) ? oldest : current,
		{});
};


function getAge(object) {
	if (!object.yearOfDeath) {
		object.yearOfDeath = (new Date()).getFullYear();
	}
	return object.yearOfDeath - object.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
