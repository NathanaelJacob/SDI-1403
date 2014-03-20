alert("JavaScript works!");

// Nathanael Jacob
// SDI 1403
// Assignment 3

//GLOBAL VARIABLES

var name = prompt("What is your name?", "Nate");
var temp = "", dirtyClothesLeft = true, whites = false;
var mLofSoap = 0, numClothes = 0, typeOfSoap = "", typeOfSoftner = "", typesOfLiquids = "", scoopsOfBleachAdded = 0;
var myCoins = [], quarters = 0, nickels = 0, dimes = 0;
var machineStatus = [];

//PROCEDURE

var turnOnWater = function(temp) {
	
	//this function turns the water to the provided temperature
	
	if (temp == "hot")
		console.log("You turn the temperature dial to the hottest setting.");
	else if (temp == "cold")
		console.log("You turn the temperature dial to the coldest setting.");
	else
		console.log("You can't really decide between hot or cold, so you spin the dial and hope for the best.");
};

//FUNCTION
//JSON argument
//Return Number

var getSoapAmount = function(clothesInfo) {
	
	//LOCAL VARS
	
	var amountOfSoapNeeded = 0; //amount of soap neccessary in mL
	
	//ARRAY PROPERTY - array.length
	
	for (var i = 0; i < clothesInfo.types.length; i++) {
		
		//determine how much soap needed
		
		//NESTED CONDITIONAL
		
		//MATH
		
		if (clothesInfo.types[i].name == "towels") {
			
			//if we have towels in the laundry, add more soap than usual
			
			if (clothesInfo.types[i].amount > 2) 
				amountOfSoapNeeded += 35;
			else
				amountOfSoapNeeded += 25;
		}
		else
			amountOfSoapNeeded = amountOfSoapNeeded + clothesInfo.types[i].amount*10;
		
		console.log("Amount of soap needed after adding " + clothesInfo.types[i].name + " is now " + amountOfSoapNeeded + "ml.");
	}
	return amountOfSoapNeeded;
};

//FUNCTION
//String arguments
//Return String

var addSoapAndSoftner = function(typeOfSoap, typeOfSoftner) {
	
	//and the soap and fabric softner to the machine
	
	var addedLiquids = "You added ";
	addedLiquids = addedLiquids + typeOfSoap + " detergent and " + typeOfSoftner + " fabric softner.";
	return addedLiquids;
};

//FUNCTION
//Array argument
//Return Boolean

var addCoins = function(coins) {
	
	//add each coin value to determine if we have enough
	
	var total = 0, coin = 0;
	
	//WHILE LOOP
	
	while ((total < 100) && (coin < coins.length)) {
		
		//MATH
		
		total += coins[coin];
		coin++;
	}
	if (total < 100)
		console.log("You've payed $0." + total + " so far.");
		
	return (total >= 100);
};

//FUNCTION
//JSON argument
//Return Array

var loadMachine = function(clothesInfo) {
	
	//clothes is json data
	
	var whites = clothesInfo.whites;
	var clothesLoaded = 0, bleachAdded = 0;
	var status = [];
	
	if (whites) {
		bleachAdded = 1;
		console.log("You add some bleach to the washer's bleach compartment.");
	}
	
	console.log("You start loading your clothes into the washer.");
	
	//load the washer with a few clothes until all clothes are loaded
	
	//get types of clothes and number of items of each from the json object
	
	var items = clothesInfo.types;
	
	//NESTED LOOP
	
	for (var i = 0; i < items.length; i++) {
		console.log("You load a handful of " + items[i].name + " into the washer.");
		clothesLoaded += items[i].amount;
		
		//loop through all the fabrics of this type of clothing	
		
		for (var j = 0; j < items[i].fabrics.length; j++) {
			console.log(items[i].fabrics[j] + " fabrics are present in this bundle of " + items[i].name + ".");
		}
	}
	console.log("You loaded " + clothesLoaded + " items of clothing into the washer.");
	
	status.push(clothesLoaded);
	status.push(bleachAdded);
	return status;
}

//START the story

console.log("You grab your basket of dirty clothes.");
console.log("You walk into the laundry room and set down the basket in front of the washer.");

temp = prompt("Would you like to use hot or cold water for the washer?", "hot");
turnOnWater(temp);

//JSON DATA

//initiate an object with info about the laundry

var laundry = {
	"types": [
		{ "name":"shirts", "amount": 9, "fabrics": ["cloth", "wool", "polyester", "cotton"]},
		{ "name":"pants", "amount": 4, "fabrics": ["khaki", "denim"]},
		{ "name":"socks", "amount": 12, "fabrics": ["wool", "cotton"]},
		{ "name":"briefs", "amount": 10, "fabrics": ["cotton"]},
		{ "name":"towels", "amount": 2, "fabrics": ["cotton"]}
		],
	"whites": false
};

//RETURNED VALUES

machineStatus = loadMachine(laundry);
numClothes = machineStatus[0];
scoopsOfBleachAdded = machineStatus[1];
console.log(scoopsOfBleachAdded + " scoops of bleach were added to this load.");

//measure detergent in milliliters

mLofSoap = getSoapAmount(laundry);

typeOfSoap = prompt("What kind of detergent are you using?", "Tide");
typeOfSoftner = prompt("What kind of fabric softner are you using?", "Febreeze");
typesOfLiquids = addSoapAndSoftner(typeOfSoap, typeOfSoftner);

//execute all actions

console.log("You add " + mLofSoap + "ml of detergent to the load.");
console.log(typesOfLiquids);

//add money to the machine

console.log("Clothes are loaded, but the machine needs to be paid first.");
quarters = prompt("How many quarters do you want to use?", 3);
dimes = prompt("How many dimes do you want to use?", 2);
nickels = prompt("How many nickels do you want to use?", 1);

//initiate array of values for the coins that are provided

//ARRAY METHOD - array.push

myCoins.push(25*quarters);
myCoins.push(10*dimes);
myCoins.push(5*nickels);

//if coins value isn't enough, keep asking for more money and call addCoins with coin array again

while (addCoins(myCoins) == false) {
	console.log("You didn't add enough money.");
	quarters = prompt("Add more quarters?", 1);
	myCoins.push(25*quarters);
}
console.log("The machine is satisfied now.");
console.log("You close the washer door.");
console.log("You press the start button.");