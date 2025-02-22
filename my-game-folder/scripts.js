let userScore = 0;
let computerScore = 0;
let scores = [];

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
        userScore += 1;
    } else {
        result = "Computer wins!";
        computerScore += 1;
    }

    scores = [userScore, computerScore];
    bubbleSort(scores);

    document.getElementById("result").innerHTML = `
        Computer chose: ${computerChoice}. ${result}<br>
        User Score: ${scores[0]}<br>
        Computer Score: ${scores[1]}
    `;
}

// Bubble Sort Algorithm
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
