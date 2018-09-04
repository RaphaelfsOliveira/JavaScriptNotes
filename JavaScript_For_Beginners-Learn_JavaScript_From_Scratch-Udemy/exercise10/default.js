var score = 0;

// first question
var answer = parseInt(prompt("What is 2 + 2 ?"));
if (answer === 4) {
  score += 1;
  alert("Good Job! The answer is indeed " + answer);
} else {
  alert("Sorry that is not the right answer..");
}

// second question
var answer = parseInt(prompt("What is 20 x 10 ?"));
if (answer === 200) {
  score += 1;
  alert("Good Job! The answer is indeed " + answer);
} else {
  alert("Sorry that is not the right answer..");
}

// third question
var answer = parseInt(prompt("What is 10 - 8 ?"));
if (answer === 2) {
  score += 1;
  alert("Good Job! The answer is indeed " + answer);
} else {
  alert("Sorry that is not the right answer..");
}

// result
if (score === 3) {
  document.write("Congrats, you have passsed the test!!");
} else {
  document.write("Sorry you have not passed, please try again..")
}
