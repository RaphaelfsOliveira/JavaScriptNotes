
function printLine(text) {
  return document.write(text + " ");
}

function getRandomNumber(number) {
  number = Math.floor(Math.random() * number) + 1;
  return document.write(number + " ");
}

function whileLoop(on) {
  if (on) {
    var count = 0;
    var finsh = 100000;

    while (count < finsh) {
      // printLine("REDRUM");
      getRandomNumber(1000);
      count += 1;
    }
  }
}

whileLoop(true);
