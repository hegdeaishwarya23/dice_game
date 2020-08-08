//Player 1

const rand1 = Math.floor(Math.random() * 6) + 1;
console.log(rand1);

const diceNumber = `dice${rand1}.png`;
console.log(diceNumber);

const diceImage = `images/${diceNumber}`;
console.log(diceImage);

const image1 = document.querySelector('.img1');
image1.setAttribute('src', diceImage);

//Player 2

const rand2 = Math.floor(Math.random() * 6) + 1;
console.log(rand2);

const diceNumber2 = `dice${rand2}.png`;
console.log(diceNumber2);

const diceImage2 = `images/${diceNumber2}`;
console.log(diceImage2);

const image2 = document.querySelector('.img2');
image2.setAttribute('src', diceImage2);

if (rand1 > rand2) {
  document.querySelector('h3').innerHTML = 'Player1 won...!!!';
} else if (rand2 > rand1) {
  document.querySelector('h3').innerHTML = 'Player-2 won...!!!';
} else {
  document.querySelector('h3').innerHTML = 'Its a Tie...!!!';
}
