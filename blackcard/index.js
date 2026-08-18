// let firstCard =Math.floor(Math.random()*12);
// let secondCard =Math.floor(Math.random()*12);

// let sum = firstCard + secondCard;
// // console.log(`${firstCard} + ${secondCard} = ${sum}`)
// // console.log(sum)
// if(sum < 21){
//   console.log('Do you want to draw a new card');
// } else if( sum === 21){
//   console.log("You've got a Blackcard");
// }

let output = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");


let firstCard = 10;
let secondCard = 11;
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
  
function startGame(){
  renderGame();
}
function renderGame(){
  sumEl.textContent = "Sum: " + sum;
  cardEl.textContent = "Card: " + cards[0] + " + " +cards[1];
if(sum <= 20){
  message ="Do you want to draw a new card?";
} else if(sum === 21){
  message = "Wohoo! You've got Blackjack!";
  hasBlackJack = true;
} else {
  message = "You're out of the game";
  isAlive = false;
}
  return(output.innerHTML = message);
}

function newCard(){

}