
var rangeNumber = prompt("Pick your number ?");

rangeNumber = parseInt(rangeNumber);

var randomNumber = Math.floor(Math.random() * rangeNumber) + 1;

document.write("You choice the "+ rangeNumber +" and the random number is "+ randomNumber);
