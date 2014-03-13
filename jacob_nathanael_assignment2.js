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

//start the story

console.log("You grab your basket of dirty clothes.");
console.log("You walk into the laundry room and set down the basket in front of the washer.");

temp = prompt("Would you like to use hot or cold water for the washer?", "hot");
turnOnWater(temp);

numClothes = prompt("How many items of clothes are you washing?", 20);

//Find out if this is a whites only load

whites = confirm("Do you want to wash only whites?");
dirtyClothesLeft = loadMachine(whites, numClothes);

//measure detergent in milliliters

mLofSoap = getSoapAmount(numClothes);

typeOfSoap = prompt("What kind of detergent are you using?", "Tide");
typeOfSoftner = prompt("What kind of fabric softner are you using?", "Febreeze");
typesOfLiquids = addSoapAndSoftner(typeOfSoap, typeOfSoftner);


//execute all actions

console.log("You add " + mLofSoap + "ml of detergent to the load.");
console.log(typesOfLiquids);

if (dirtyClothesLeft) {
	console.log("You didn't have enough space for your whole load, apparently. Guess you'll have to do another later.");
}
console.log("You close the washer door.");
console.log("You press the start button.");
