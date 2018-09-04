var userGender = prompt("What is your gender ?").toLowerCase();

var userAge = parseInt(prompt("How old are you ?"));

if (userGender === 'male' && userAge >= 20) {
  alert("Congrats you qualify for our FREE offer!");
} else {
  alert("Sorry please come back to future offers..");
}
