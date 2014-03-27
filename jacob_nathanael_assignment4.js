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

//Test each program
var array = [2,5,7,2,65,23,13,10,4,8,19];
var number = 10;
var smallestValue = smallestGreaterThan(array, number);
console.log("Smallest value in " + array + " greater than " + number + ": " + smallestValue);
number = 25;
smallestValue = smallestGreaterThan(array, number);
console.log("Smallest value in " + array + " greater than " + number + ": " + smallestValue);

var sum = sumArray(array);
console.log("The sum of the array is " + sum);
array = [2,5,7,"hello",2,65,false,23,13,"125",10,4,8,{ name: 'test' },19];
sum = sumArray(array);
console.log("The sum of the array with non-number elements is " + sum);

var str = "42";
number = stringToNumber(str);
console.log("The number value of the string '" + str + "' is " + number);

var longDecimal = 12.257389098762;
var shortDecimal = formatNumber(longDecimal, 2);
console.log("Trimming " + longDecimal + " down to 2 decimal places: " + shortDecimal);

var lowerCaseStr = "the quick brown fox jumped over the fence";
var titleCaseStr = titleCase(lowerCaseStr);
console.log("Title case the string '" + lowerCaseStr + "' --> '" + titleCaseStr + "'");

var num1 = 87, num2 = 58;
var isFuzzyMatched = fuzzyMatch(num1, num2, 70);
console.log("Is " + num1 + " within 70% of " + num2 + "? ");
if (isFuzzyMatched) 
	console.log("Yes!");
else
	console.log("No!");
isFuzzyMatched = fuzzyMatch(num1, num2, 50);
console.log("Is " + num1 + " within 50% of " + num2 + "? ");
if (isFuzzyMatched) 
	console.log("Yes!");
else
	console.log("No!");