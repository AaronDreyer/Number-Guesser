let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    let humanDistance = Math.abs(targetNumber - humanGuess);
    let computerDistance = Math.abs(targetNumber - computerGuess);

    if (humanDistance === computerDistance) {
        return true;
    } else if (humanDistance < computerDistance) {
        return true;
    } else {
        return false;
    }
}

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => {
    return currentRoundNumber++;
}