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