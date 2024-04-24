const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const resultElement = document.getElementById("results");
const scoreElement = document.querySelector("#score");

let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function updateScore() {
    scoreElement.innerHTML = "Score: " + playerWins + " " + computerWins;
}

function playGame() {
    if (playerWins >= 3 || computerWins >= 3) {
        if (playerWins >= 3) {
            console.log("Player wins the game!");
        } else {
            console.log("Computer wins the game!");
        }
        return;
    }

    let computerSelection = getComputerChoice();
    let roundResult = playRound(userChoice, computerSelection);

    resultElement.innerHTML += "<br>" + roundResult; // Agregar el resultado de la ronda al historial de resultados

    if (roundResult === "You win!") {
        playerWins++;
    } else if (roundResult === "You lose!") {
        computerWins++;
    }

    updateScore();
}

btnRock.addEventListener("click", () => {
    userChoice = "rock";
    playGame();
});

btnPaper.addEventListener("click", () => {
    userChoice = "paper";
    playGame();
});

btnScissors.addEventListener("click", () => {
    userChoice = "scissors";
    playGame();
});