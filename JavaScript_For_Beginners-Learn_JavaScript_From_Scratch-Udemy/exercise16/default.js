
function getUserName() {
  do {
    var userName = prompt("What is your name ?");
  } while (userName === null || userName >= 0);

  document.write("Hello "+ userName);
}

getUserName();
