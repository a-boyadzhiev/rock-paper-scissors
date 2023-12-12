let compChoice = {Value: ""};
let playerChoice;
let compChoiceInt = 0;
let playerChoiceInt = 0;
const images = document.querySelectorAll('.img');

let computerScore = 0;
let playerScore = 0;

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#comp-score");
computer.textContent = `Computer Score: ${compScore}`;

const output = document.querySelector("#output");
output.textContent = "May the Best Person Win!"


images.forEach((img) => {img.addEventListener('click', () => {
    playerChoice = img.id;
    if (playerChoice == "rock"){playerChoiceInt = 0;}
    else if (playerChoice == "paper"){playerChoiceInt = 1;}
    else if (playerChoice == "scissors"){playerChoiceInt = 2;}

    compChoiceInt = getComputerChoice(array);
    
  }) 
});

function computerPlay (compChoice) {
  let choiceNum = Math.floor(Math.random() * 3)

  if (choiceNum == 0){compChoice.value = "rock";}
  else if (choiceNum == 1){compChoice.value = "paper";}
  else if (choiceNum == 2){compChoice.value = "scissors";}
  
  return choiceNum;
}

function playRound (){
  let winArray = [[0, 2, 1], [1, 0, 2], [2, 1, 0]];
  let result = winArray[playerChoiceInt][compChoiceInt];

  if (result == 0){
    output.textContent = `Its a tie! You chose ${playerChoice} and The computer chose ${compChoice.Value}`;
  }
  else if (result == 1){
    output.textContent = `You won! You chose ${playerChoice} and The computer chose ${compChoice.Value}`;
    playerScore++
  }
  else if (result == 1){
    output.textContent = `You lost! You chose ${playerChoice} and The computer chose ${compChoice.Value}`;
    computerScore++
  }
}

function playGame(){
  output.textContent = "Choose Rock, Paper, or Scissors"

  playRound();

  player.textContent = `Player Score: ${playerScore}`;
  computer.textContent = `Computer Score: ${computerScore}`;

  if (playerScore == 5){
    output.textContent = "You won the game!"
  }else if (computerScore == 5){
    output.textContent = "You lost the game!"
  }
}