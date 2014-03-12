alert("JavaScript works!");

//Nathanael Jacob
//SDI 1403
//Assignment 2

//set variables initially
var name = prompt("What is your name?", "Nate");
var temp = "", dirtyClothesLeft = true, whites = false;
var mLofSoap = 0, numClothes = 0, typeOfSoap = "", typeOfSoftner = "", typesOfLiquids = "";

var turnOnWater = function(temp) {
	//this function turns the water to the provided temperature
	if (temp === "hot")
		console.log("You turn the temperature dial to the hottest setting.");
	else if (temp == "cold")
		console.log("You turn the temperature dial to the coldest setting.");
	else
		console.log("You can't really decide between hot or cold, so you spin the dial and hope for the best.");
};

var getSoapAmount = function(amountOfClothes) {
	var amountOfSoapNeeded = 0; //amount of soap neccessary in mL
	for (var i = 0; i < amountOfClothes; i++) {
		//determine how much soap needed
		amountOfSoapNeeded = amountOfSoapNeeded + 10;
		console.log("Amount of soap needed is now " + amountOfSoapNeeded + "ml.");
	}
	return amountOfSoapNeeded;
}

var addSoapAndSoftner = function(typeOfSoap, typeOfSoftner) {
	//and the soap and fabric softner to the machine
	var addedLiquids = "You added ";
	addedLiquids = addedLiquids + typeOfSoap + " detergent and " + typeOfSoftner + " fabric softner.";
	return addedLiquids;
}

var loadMachine = function(whites, amountOfClothes) {
	var dirtyClothes = true;
	if (whites) {
		console.log("You add some bleach to the washer's bleach compartment.");
	}
	
	console.log("You start loading your clothes into the washer.");
	while (dirtyClothes) {
		//load the washer with a few clothes until all clothes are loaded
		if (amountOfClothes > 0) {
			console.log("You load another handful of clothes into the washer.");
			amountOfClothes = amountOfClothes - 3; 
		}
		else {
			console.log("You finally loaded all the clothes into the waster.");
			dirtyClothes = false;
		}
	}
	
	return dirtyClothes;
}

