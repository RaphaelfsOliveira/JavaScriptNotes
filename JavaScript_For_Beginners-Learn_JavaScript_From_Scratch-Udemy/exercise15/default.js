

function secretQuest() {
  var count = 0;
  var secret = "abracadabra";

  while (answer !== secret) {
    var answer = prompt("What is the Secret Password ?").toLowerCase();
    count += 1;

    if (answer == secret) {
      document.write("YOU MAY ENTER!!");
      break;
    }

    if (count === 5) {
      document.write("YOU SHALL NOT PASS!!");
      break;
    }
  }

}

secretQuest();
