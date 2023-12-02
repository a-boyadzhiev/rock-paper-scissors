// Function that chooses randomly

const array = ["ROCK", "PAPER", "SCISSORS"];

      function getComputerChoice (array) {
        const randomChoice = Math.floor(Math.random() * array.length)
        const choice = array[randomChoice]
        return choice;
      }

// Variables that store the score

let computerScore = 0;
let playerScore = 0;

// Function that stores the different cases

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toUpperCase();
    computerSelection = getComputerChoice(array);
    console.log("The computer chose " + computerSelection + "\nYou chose " + playerSelection + "\n........................................")

    if (computerSelection == "ROCK" && playerSelection == "ROCK") {console.log("DRAW! Play again.")
    } else if (computerSelection == "ROCK" && playerSelection == "PAPER")  {console.log("YOU WIN THIS ROUND"), playerScore++
    } else if (computerSelection == "ROCK" && playerSelection == "SCISSORS") { console.log("YOU LOSE THIS ROUND"), computerScore++
    } else if (computerSelection == "PAPER" && playerSelection == "SCISSORS") { console.log("YOU WIN THIS ROUND"), playerScore++
    } else if (computerSelection == "PAPER" && playerSelection == "ROCK") { console.log("YOU LOSE THIS ROUND"), computerScore++
    } else if (computerSelection == "PAPER" && playerSelection == "PAPER") { console.log("DRAW")
    } else if (computerSelection == "SCISSORS" && playerSelection == "PAPER") { console.log("YOU LOSE THIS ROUND"), computerScore++
    } else if (computerSelection == "SCISSORS" && playerSelection == "ROCK") { console.log("YOU WIN THIS ROUND"), playerScore++
    } else if (computerSelection == "SCISSORS" && playerSelection == "SCISSORS") { console.log("DRAW")
    }
  }

//Loop that plays five round rounds and returns the end score

  function game(){
    for (let i = 1; i <= 5; i++){
      const playerSelection = prompt("ROCK, PAPER, SCISSORS?");
      const computerSelection = getComputerChoice(array);
      playRound(playerSelection, computerSelection);
    }

    
    console.log("AI vs YOU" + "\n" + computerScore + "     " + playerScore) 

    if (computerScore > playerScore){
      console.log("Sorry! You lost the game!")
    }else {
      console.log ("Congratulations! You won!")
    }
  }

  game()
