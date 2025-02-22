let userScore = 0;
let computerScore = 0;
const scores = [];

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
        userScore++;
    } else {
        result = "Computer wins!";
        computerScore++;
    }

    // Add the scores to the list and sort
    scores.push(userScore - computerScore);
    bubbleSort(scores);

    // Display the result and sorted scores
    document.getElementById("result").innerHTML = `
        Computer chose: ${computerChoice}. ${result}<br>
        User Score: ${userScore} | Computer Score: ${computerScore}<br>
        Sorted Scores: ${scores.join(", ")}
    `;
}

// Bubble Sort Algorithm
function bubbleSort(arr) {
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

// Example usage of bubbleSort (for demonstration, this can be removed or commented out)
const demoScores = [64, 34, 25, 12, 22, 11, 90];
console.log("Original demo scores:", demoScores);
console.log("Sorted demo scores:", bubbleSort(demoScores));
