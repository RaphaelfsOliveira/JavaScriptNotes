
var correctAnswer = false;

var answer = prompt("What is 2 + 2 ?");

answer = parseInt(answer);

if (answer === 4) {
  var correctAnswer = true;
}

if (correctAnswer) {
  alert("Good Job! The answer is indeed " + answer);
  document.write("You are a math wiz!");
} else {
  alert("Sorry that is not the right answer..");
  document.write("Please try again!");
}
