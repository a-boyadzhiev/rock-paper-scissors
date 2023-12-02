// Function that chooses randomly

const array = ["ROCK", "PAPER", "SCISSORS"];

      function getComputerChoice (array) {
        const randomChoice = Math.floor(Math.random() * array.length)
        const choice = array[randomChoice]
        return choice;
      }
