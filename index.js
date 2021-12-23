let randomNumber1 = getRandomValue();
let randomNumber2 = getRandomValue();
let randomDiceImage;
let randomImageSource;

function getRandomValue() {
  let value = Math.floor(Math.random() * 6) + 1;
  return value;
}

function setDice(randomNumber) {
  randomDiceImage = "dice" + randomNumber + ".png";
  randomImageSource = "images/" + randomDiceImage;
  return randomImageSource;
}

let image1 = document.querySelectorAll("img")[0];
let image2 = document.querySelectorAll("img")[1];
image1.setAttribute("src", setDice(randomNumber1));
image2.setAttribute("src", setDice(randomNumber2));

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "It's a draw!";
}
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}
