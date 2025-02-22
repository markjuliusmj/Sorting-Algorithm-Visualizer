let userScore = 0;
let computerScore = 0;
let roundCount = 0;
let maxRounds = 0;
const scores = { user: [], computer: [] };

// Start the game with the selected number of rounds
function startGame(rounds) {
    maxRounds = rounds;
    userScore = 0;
    computerScore = 0;
    roundCount = 0;
    scores.user = [];
    scores.computer = [];
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-screen").style.display = "block";
    document.getElementById("game-over-screen").style.display = "none";
    document.getElementById("next-button").style.display = "none";
    document.getElementById("result").innerHTML = "";
}

// Play a round of Rock, Paper, Scissors
function playGame(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        const userPoints = calculatePoints(maxRounds);
        userScore += userPoints;
        scores.user.push(userPoints);
    } else {
        result = "Computer wins!";
        const computerPoints = calculatePoints(maxRounds);
        computerScore += computerPoints;
        scores.computer.push(computerPoints);
    }

    roundCount++;
    document.getElementById("result").innerHTML = `
        Computer chose: ${computerChoice}. ${result}<br>
        User Score: ${userScore} | Computer Score: ${computerScore}<br>
        Round: ${roundCount} of ${maxRounds}<br>
        Sorted User Scores: ${sortScores(scores.user)}<br>
        Sorted Computer Scores: ${sortScores(scores.computer)}
    `;

    if (roundCount === maxRounds) {
        document.getElementById("next-button").style.display = "block";
    }
}

// Calculate points based on the number of rounds with a random multiplier
function calculatePoints(rounds) {
    const basePoints = rounds === 1 ? 10 : rounds === 3 ? 5 : 3;
    const multiplier = Math.floor(Math.random() * 10) + 1; // Random multiplier between 1 and 10
    return basePoints * multiplier;
}

// Sort scores using Bubble Sort
function sortScores(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// End the game and show the final result
function endGame() {
    document.getElementById("game-screen").style.display = "none";
    document.getElementById("game-over-screen").style.display = "block";
    let finalResult = "";
    if (userScore > computerScore) {
        finalResult = "Congratulations, You won the game!";
    } else if (userScore < computerScore) {
        finalResult = "Sorry, the Computer won the game.";
    } else {
        finalResult = "It's a tie!";
    }
    document.getElementById("final-result").innerHTML = `
        ${finalResult}<br>
        Overall Sorted User Scores: ${sortScores(scores.user)}<br>
        Overall Sorted Computer Scores: ${sortScores(scores.computer)}
    `;
}

// Reset the game to the start screen
function resetGame() {
    document.getElementById("next-button").style.display = "none";
    document.getElementById("game-over-screen").style.display = "none";
    document.getElementById("start-screen").style.display = "block";
}

// Move to the next screen to show the final result
function nextScreen() {
    document.getElementById("next-button").style.display = "none";
    endGame();
}
