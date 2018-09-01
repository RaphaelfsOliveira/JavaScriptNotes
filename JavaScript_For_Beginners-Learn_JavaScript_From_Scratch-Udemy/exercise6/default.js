console.log("start program");

var YEAR = 365;

var visitorName = prompt("What is your name ?");

var visitorAge = prompt("How old are you ?");

var ageInDays = parseInt(visitorAge) * YEAR;

document.write("Hello "+ visitorName +" you have been alive for "+ ageInDays +" days.");


console.log("finish program");
