
function getRandomNumber(number) {
  return Math.floor(Math.random() * number) + 1;
}

function loopsChallenge() {
  var count = 0;
  var number = prompt("Escolha o numero máximo para gerar o jogo ?");
  number = getRandomNumber(number);

  do {
    var userNumber = parseInt(prompt("Tente acertar o numero sorteado ?"));
    count += 1

    if (userNumber !== number) {
      if (userNumber > number) {
        alert("Mais Baixo!");
      } else {
        alert("Mais Alto!");
      }
    }
  } while (userNumber !== number);

  document.write("Parabéns, depois de "+ count +" tentativas você acertou o numero: "+ number);
}

loopsChallenge();
