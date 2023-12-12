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
