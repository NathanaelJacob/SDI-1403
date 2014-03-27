alert("JavaScript works!");

//Nathanael Jacob
// SDI 1403
// Assignment 4



//Find smallest value in an array greater than a given number
function smallestGreaterThan(array, number) {
	array = array.sort(function(a,b) {
		return a - b;
	});
	for (var i = 0; i < array.length; i++) {
		if (array[i] > number)
			return array[i];
	}
	return null;
}

//Find the total value of just the numbers in an array, even if some of the items are not numbers
function sumArray(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		if (typeof array[i] == 'number')
			sum += array[i];
	}
	return sum;
}

//Return value of string version of a number
function stringToNumber(str) {
	return parseInt(str);
}

//Format a number to use a specific number of decimal places
function formatNumber(number, decimalPlaces) {
	return parseFloat(number).toFixed(decimalPlaces);
}

//Turn each word in a string to start with a caoital letter
function titleCase(str) {
	var words = str.split(" ");
	for (var i = 0; i < words.length; i++) {
		words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
	}
	return words.join(" ");
}

//Fuzzy match a number above or below another number within given percent
function fuzzyMatch(number1, number2, percentage) {
	var ratio, match;
	if (number1 > number2) {
		ratio = number2/number1;
	}
	else {
		ratio = number1/number2;
	}
	match = (ratio * 100) >= percentage;
	return match;
}