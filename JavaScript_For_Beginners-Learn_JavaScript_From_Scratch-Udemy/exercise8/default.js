
var answer = prompt("What is 2 + 2 ?");

answer = parseInt(answer);

if (answer === 4) {
  alert("Good job! The answer is indeed " + answer);
  document.write("You are a math wiz!");
} else {
  alert("Sorry that is not right answer..");
  document.write("Please try again!");
}
