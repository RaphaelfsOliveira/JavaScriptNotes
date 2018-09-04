var score = 0

var userName = prompt("Whats is you name ?");

var answer = parseInt(prompt("What is 2 + 1 ?"));
if (answer === 3) {
  score += 1
  alert("Congrats, this is right answer " + answer);
} else {
  alert("Sorry, this is wrong..");
}

var answer = parseInt(prompt("What is 3 x 4 ?"));
if (answer === 12) {
  score += 1
  alert("Congrats, this is right answer " + answer);
} else {
  alert("Sorry, this is wrong..");
}

var answer = parseInt(prompt("What is 100 - 1 ?"));
if (answer === 99) {
  score += 1
  alert("Congrats, this is right answer " + answer);
} else {
  alert("Sorry, this is wrong..");
}

if (score >= 2) {
  document.write("Very Good "+ userName +" you passed de test!");
} else {
  document.write("Sorry "+ userName +" try again...");
}
