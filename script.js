function rollDice() {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;
    var dice1Img = document.getElementById("dice1");
    var dice2Img = document.getElementById("dice2");
    var score1 = parseInt(document.getElementById("score1").textContent);
    var score2 = parseInt(document.getElementById("score2").textContent);
  
    dice1Img.src = "dice" + dice1 + ".png";
    dice2Img.src = "dice" + dice2 + ".png";
  
    var difference = Math.abs(dice1 - dice2);
    if (dice1 > dice2) {
      score1 += difference;
      score2 -= difference;
    } else if (dice2 > dice1) {
      score2 += difference;
      score1 -= difference;
    }
  
    document.getElementById("score1").textContent = score1;
    document.getElementById("score2").textContent = score2;
  
    if (score1 >= 20) {
      document.getElementById("winner").textContent = "Player 1 wins!";
      disableButton();
    } else if (score2 >= 20) {
      document.getElementById("winner").textContent = "Player 2 wins!";
      disableButton();
    }
  }
  
  function disableButton() {
    document.querySelector("button").disabled = true;
  }