let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
  };
  
  const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    const humanDifference = Math.abs(secretTarget - humanGuess);
    const computerDifference = Math.abs(secretTarget - computerGuess);
  
    if (humanDifference <= computerDifference) {
      return true;
    } else {
      return false;
    }
  };
  
  const updateScore = (str) => {
    if (str === "human") {
      humanScore++;
    } else if (str === "computer") {
      computerScore++;
    }
  };
  
  const advanceRound = () => currentRoundNumber++;